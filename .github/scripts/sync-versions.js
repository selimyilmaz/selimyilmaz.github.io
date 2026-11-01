#!/usr/bin/env node

/**
 * Selim YILMAZ Portfolio — Automated Project Version Synchronizer
 * -------------------------------------------------------------
 * Fetches latest releases and tags across all 17 portfolio repositories
 * using the GitHub REST API, safely parses semantic versions,
 * prevents unintended downgrades, and updates `assets/js/projects-data.js`.
 *
 * Supported environments:
 *  - GitHub Actions CI (via SYNC_PAT, GH_PAT, or GITHUB_TOKEN)
 *  - Local development (auto-detects token via `gh auth token` or env)
 */

const https = require('https');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const DATA_FILE_PATH = path.resolve(__dirname, '../../assets/js/projects-data.js');

// 1. Resolve GitHub Auth Token
let token = process.env.SYNC_PAT || process.env.GH_PAT || process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
if (!token) {
  try {
    token = execSync('gh auth token', { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'] }).trim();
  } catch {
    // If no token, unauthenticated requests will be used (subject to rate limit & public repos only)
  }
}

if (token) {
  console.log('[Auth] Authenticated via GitHub token.');
} else {
  console.warn('[Auth] No token found. Running unauthenticated (private repos may fail).');
}

// 2. HTTP Helper for GitHub API
function fetchGithub(apiPath) {
  return new Promise((resolve) => {
    const req = https.request({
      hostname: 'api.github.com',
      path: apiPath,
      method: 'GET',
      headers: {
        'User-Agent': 'SelimYilmaz-Portfolio-Sync',
        'Accept': 'application/vnd.github+json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(JSON.parse(data));
          } else {
            resolve(null);
          }
        } catch {
          resolve(null);
        }
      });
    });

    req.on('error', (err) => {
      console.warn(`[HTTP Error] ${apiPath}:`, err.message);
      resolve(null);
    });

    req.setTimeout(10000, () => {
      req.destroy();
      resolve(null);
    });

    req.end();
  });
}

// 3. SemVer Helpers
function parseSemver(str) {
  if (!str) return [0, 0, 0];
  const clean = str.replace(/^[^\d]*/, '').split('+')[0];
  const match = clean.match(/^(\d+)(?:\.(\d+))?(?:\.(\d+))?/);
  if (!match) return [0, 0, 0];
  return [
    parseInt(match[1] || '0', 10),
    parseInt(match[2] || '0', 10),
    parseInt(match[3] || '0', 10)
  ];
}

function compareSemver(a, b) {
  const pa = parseSemver(a);
  const pb = parseSemver(b);
  for (let i = 0; i < 3; i++) {
    if (pa[i] > pb[i]) return 1;
    if (pa[i] < pb[i]) return -1;
  }
  return 0;
}

function normalizeV(v) {
  if (!v) return null;
  let str = v.trim();
  str = str.replace(/^[^\d]*/, ''); // strip leading non-digits like 'v' or 'win-'
  str = str.split('+')[0]; // strip build metadata
  return 'v' + str;
}

// 4. Fetch Best Version for Single Repo
async function getHighestVersionForRepo(owner, repo, prefixFilter = null) {
  // Strategy:
  // 1. If repo has official GitHub Releases, check releases first
  const releases = await fetchGithub(`/repos/${owner}/${repo}/releases?per_page=15`);
  const releaseCandidates = [];

  if (Array.isArray(releases) && releases.length > 0) {
    for (const rel of releases) {
      if (!rel.draft) {
        if (rel.tag_name) releaseCandidates.push(rel.tag_name);
        else if (rel.name) releaseCandidates.push(rel.name);
      }
    }
  }

  let candidates = releaseCandidates;

  // 2. If no releases, check git tags
  if (candidates.length === 0) {
    const tags = await fetchGithub(`/repos/${owner}/${repo}/tags?per_page=30`);
    if (Array.isArray(tags)) {
      candidates = tags.map(t => t.name);
    }
  }

  // 3. Filter candidates if prefixFilter provided
  let filtered = candidates;
  if (prefixFilter) {
    filtered = candidates.filter(c => prefixFilter.test(c));
  } else {
    // Exclude noise tags like 'latest', 'server-...', etc.
    filtered = candidates.filter(c => !/latest|server|database/i.test(c));

    // If there are tags with 'v' prefix (e.g. v18.3.0 vs legacy 24.8), prioritize 'v' prefixed
    const vPrefixed = filtered.filter(c => /^v\d/i.test(c));
    if (vPrefixed.length > 0) {
      filtered = vPrefixed;
    }
  }

  if (filtered.length === 0) return null;

  // Pick candidate with highest semantic version
  filtered.sort((a, b) => compareSemver(b, a));
  return filtered[0];
}

// 5. Project Configuration Dataset
const PROJECT_CONFIGS = [
  {
    id: 'doktordesk',
    resolver: async (current) => {
      const tags = await fetchGithub('/repos/selimyilmaz/DoktorDesk/tags?per_page=30');
      let appVer = 'v1.10.0';
      let mobilVer = 'v0.1.6';

      if (Array.isArray(tags)) {
        const appTags = tags.filter(t => t.name.startsWith('app-v'));
        appTags.sort((a, b) => compareSemver(b.name, a.name));
        if (appTags.length > 0) {
          appVer = normalizeV(appTags[0].name.replace('app-', ''));
        }

        const mobilTags = tags.filter(t => t.name.startsWith('mobil-v'));
        mobilTags.sort((a, b) => compareSemver(b.name, a.name));
        if (mobilTags.length > 0) {
          mobilVer = normalizeV(mobilTags[0].name.replace('mobil-', ''));
        }
      }

      // Preserve or upgrade each component
      const currentApp = current.match(/App\s+(v[\d.]+)/i)?.[1];
      const currentMob = current.match(/Mobil\s+(v[\d.]+)/i)?.[1];

      if (currentApp && compareSemver(currentApp, appVer) > 0) appVer = currentApp;
      if (currentMob && compareSemver(currentMob, mobilVer) > 0) mobilVer = currentMob;

      return `App ${appVer} / Mobil ${mobilVer}`;
    }
  },
  {
    id: 'seecore',
    resolver: async (current) => {
      const raw = await getHighestVersionForRepo('selimyilmaz', 'SeeCORE', /^win-/i);
      const newV = raw ? normalizeV(raw) : null;
      if (newV && compareSemver(newV, current) >= 0) return newV;
      return current;
    }
  },
  {
    id: 'seedio-prime',
    resolver: async (current) => {
      const raw = await getHighestVersionForRepo('selimyilmaz', 'SeeDIO-PRIME');
      const newV = raw ? normalizeV(raw) : null;
      if (newV && compareSemver(newV, current) >= 0) return newV;
      return current;
    }
  },
  {
    id: 'seeiban',
    resolver: async (current) => {
      const raw = await getHighestVersionForRepo('selimyilmaz', 'SeeIBAN');
      const newV = raw ? normalizeV(raw) : null;
      if (newV && compareSemver(newV, current) >= 0) return newV;
      return current;
    }
  },
  {
    id: 'seemap',
    resolver: async (current) => {
      const raw = await getHighestVersionForRepo('selimyilmaz', 'SeeMAP');
      const newV = raw ? normalizeV(raw) : null;
      if (newV && compareSemver(newV, current) >= 0) return newV;
      return current;
    }
  },
  {
    id: 'ek-odeme-analiz',
    resolver: async (current) => {
      const rawWeb = await getHighestVersionForRepo('selimyilmaz', 'Ek_Odeme_Analiz_Sistemi');
      const rawMob = await getHighestVersionForRepo('selimyilmaz', 'Ek_Odeme_Analiz_Sistemi_Mobil');

      let webV = rawWeb ? normalizeV(rawWeb) : 'v18.7.0';
      let mobV = rawMob ? normalizeV(rawMob) : 'v1.7.0';

      const currentWeb = current.match(/Web\s+(v[\d.]+)/i)?.[1];
      const currentMob = current.match(/Mobil\s+(v[\d.]+)/i)?.[1];

      // Never downgrade an existing higher version
      if (currentWeb && compareSemver(currentWeb, webV) > 0) webV = currentWeb;
      if (currentMob && compareSemver(currentMob, mobV) > 0) mobV = currentMob;

      return `Web ${webV} / Mobil ${mobV}`;
    }
  },
  {
    id: 'butce-finsee',
    resolver: async (current) => {
      const rawWeb = await getHighestVersionForRepo('selimyilmaz', 'Butce');
      const rawMob = await getHighestVersionForRepo('selimyilmaz', 'Butce_Mobil');

      let webV = rawWeb ? normalizeV(rawWeb) : 'v4.7.2';
      let mobV = rawMob ? normalizeV(rawMob) : 'v1.8.0';

      const currentWeb = current.match(/Web\s+(v[\d.]+)/i)?.[1];
      const currentMob = current.match(/Mobil\s+(v[\d.]+)/i)?.[1];

      if (currentWeb && compareSemver(currentWeb, webV) > 0) webV = currentWeb;
      if (currentMob && compareSemver(currentMob, mobV) > 0) mobV = currentMob;

      return `Web ${webV} / Mobil ${mobV}`;
    }
  },
  {
    id: 'seesky',
    resolver: async (current) => {
      const raw = await getHighestVersionForRepo('selimyilmaz', 'SeeSKY');
      const newV = raw ? normalizeV(raw) : null;
      if (newV && compareSemver(newV, current) >= 0) return newV;
      return current;
    }
  },
  {
    id: 'stk-web',
    resolver: async (current) => {
      const rawWeb = await getHighestVersionForRepo('selimyilmaz', 'BALGOC_Uye_Yonetim_Sistemi');
      const rawMob = await getHighestVersionForRepo('selimyilmaz', 'BALGOC_Mobil');

      let webV = rawWeb ? normalizeV(rawWeb) : 'v9.27.0';
      let mobV = rawMob ? normalizeV(rawMob) : 'v1.1.0';

      const currentWeb = current.match(/Web\s+(v[\d.]+)/i)?.[1];
      const currentMob = current.match(/Mobil\s+(v[\d.]+)/i)?.[1];

      if (currentWeb && compareSemver(currentWeb, webV) > 0) webV = currentWeb;
      if (currentMob && compareSemver(currentMob, mobV) > 0) mobV = currentMob;

      return `Web ${webV} / Mobil ${mobV}`;
    }
  },
  {
    id: 'medikal-stk-web',
    resolver: async (current) => {
      const raw = await getHighestVersionForRepo('selimyilmaz', 'TMRTDER_Uye_Yonetim_Sistemi');
      const newV = raw ? normalizeV(raw) : null;
      if (newV && compareSemver(newV, current) >= 0) return newV;
      return current;
    }
  },
  {
    id: 'medikal-stk-mobil',
    resolver: async (current) => {
      const raw = await getHighestVersionForRepo('selimyilmaz', 'TMRT-Der');
      const newV = raw ? normalizeV(raw) : null;
      if (newV && compareSemver(newV, current) >= 0) return newV;
      return current;
    }
  },
  {
    id: 'wp-sertifika-dogrulama',
    resolver: async (current) => {
      const raw = await getHighestVersionForRepo('selimyilmaz', 'WP-tmrtder-sertifika-sorgulama');
      const newV = raw ? normalizeV(raw) : null;
      if (newV && compareSemver(newV, current) >= 0) return newV;
      return current;
    }
  },
  {
    id: 'kira-takip',
    resolver: async (current) => {
      const raw = await getHighestVersionForRepo('selimyilmaz', 'Kira_Takip');
      const newV = raw ? normalizeV(raw) : null;
      if (newV && compareSemver(newV, current) >= 0) return newV;
      return current;
    }
  },
  {
    id: 'seebliss-seemusic',
    resolver: async (current) => {
      const raw = await getHighestVersionForRepo('selimyilmaz', 'SeeBliss');
      const newV = raw ? normalizeV(raw) : null;
      if (newV && compareSemver(newV, current) >= 0) return newV;
      return current;
    }
  },
  {
    id: 'seeeditor',
    resolver: async (current) => {
      const raw = await getHighestVersionForRepo('selimyilmaz', 'SeeEditor');
      const newV = raw ? normalizeV(raw) : null;
      if (newV && compareSemver(newV, current) >= 0) return newV;
      return current;
    }
  },
  {
    id: 'seedrive',
    resolver: async (current) => {
      const raw = await getHighestVersionForRepo('selimyilmaz', 'SeeDRIVE');
      const newV = raw ? normalizeV(raw) : null;
      if (newV && compareSemver(newV, current) >= 0) return newV;
      return current;
    }
  },
  {
    id: 'candy-slicer',
    resolver: async (current) => {
      const raw = await getHighestVersionForRepo('selimyilmaz', 'GAME-CandySlicer');
      const newV = raw ? normalizeV(raw) : null;
      if (newV && compareSemver(newV, current) >= 0) return newV;
      return current;
    }
  }
];

// 6. Main Execution
async function main() {
  console.log('====================================================');
  console.log('  Portfolio Projects Version Synchronizer           ');
  console.log('====================================================');

  if (!fs.existsSync(DATA_FILE_PATH)) {
    console.error(`[Error] Target data file not found: ${DATA_FILE_PATH}`);
    process.exit(1);
  }

  let content = fs.readFileSync(DATA_FILE_PATH, 'utf-8');
  let changesCount = 0;

  for (const config of PROJECT_CONFIGS) {
    const regex = new RegExp(`(id:\\s*['"]${config.id}['"][\\s\\S]*?version:\\s*['"])([^'"]+)(['"])`);
    const match = content.match(regex);

    if (!match) {
      console.warn(`[Skip] Could not find project block for id: "${config.id}"`);
      continue;
    }

    const currentVersion = match[2];
    try {
      const updatedVersion = await config.resolver(currentVersion);

      if (updatedVersion && updatedVersion !== currentVersion) {
        console.log(`[Update] ${config.id.padEnd(24)} : "${currentVersion}" -> "${updatedVersion}"`);
        content = content.replace(regex, `$1${updatedVersion}$3`);
        changesCount++;
      } else {
        console.log(`[Keep]   ${config.id.padEnd(24)} : "${currentVersion}" (latest)`);
      }
    } catch (err) {
      console.error(`[Error]  ${config.id.padEnd(24)} : ${err.message}`);
    }
  }

  console.log('----------------------------------------------------');
  if (changesCount > 0) {
    fs.writeFileSync(DATA_FILE_PATH, content, 'utf-8');
    console.log(`[Success] Updated ${changesCount} project version(s) in projects-data.js.`);
  } else {
    console.log('[Notice] All project versions are already up-to-date. No files modified.');
  }
  console.log('====================================================\n');
}

main().catch((err) => {
  console.error('[Fatal Error]', err);
  process.exit(1);
});
