/**
 * Selim YILMAZ — Executive Portfolio Logic & Interactive Controller
 * Icon/Symbol-First UI Architecture
 */

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('projectsGrid');
  const searchInput = document.getElementById('projectSearch');
  const filterBtns = document.querySelectorAll('.pill-btn');
  const themeToggle = document.getElementById('themeToggle');
  const counterSpan = document.getElementById('projectCount');

  // Modal elements
  const modalOverlay = document.getElementById('projectModal');
  const modalIconContainer = document.getElementById('modalIconContainer');
  const modalTitle = document.getElementById('modalTitle');
  const modalVersion = document.getElementById('modalVersion');
  const modalPlatforms = document.getElementById('modalPlatforms');
  const modalTagline = document.getElementById('modalTagline');
  const modalDesc = document.getElementById('modalDesc');
  const modalFeatures = document.getElementById('modalFeatures');
  const modalStack = document.getElementById('modalStack');
  const modalClose = document.getElementById('modalClose');

  let currentCategory = 'all';
  let currentSearch = '';

  // Theme Management
  const savedTheme = localStorage.getItem('sy_theme_mode') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('sy_theme_mode', next);
      updateThemeIcon(next);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggle) return;
    themeToggle.innerHTML = theme === 'dark' 
      ? '<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'
      : '<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path></svg>';
    themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Aydınlık moda geç' : 'Karanlık moda geç');
  }

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter') || 'all';
      renderGallery();
    });
  });

  // Search Input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim().toLowerCase();
      renderGallery();
    });
  }

  // Emerald Checkmark SVG
  const checkSvg = `
    <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
    </svg>
  `;

  // Platform Badges Config with High-Precision SVG Brand Icons
  const PLATFORM_CONFIG = [
    { match: /android tv/i, key: 'tv', label: 'Android TV', svg: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="13" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>' },
    { match: /android auto/i, key: 'auto', label: 'Android Auto', svg: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17h14M5 17a2 2 0 01-2-2V9a2 2 0 012-2h1.5a2 2 0 011.6.8l1.8 2.4h4.2l1.8-2.4a2 2 0 011.6-.8H19a2 2 0 012 2v6a2 2 0 01-2 2M5 17a2 2 0 104 0m10 0a2 2 0 104 0"></path></svg>' },
    { match: /android/i, key: 'android', label: 'Android', svg: '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993 0 .5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.414 13.8533 8.12 12 8.12s-3.5902.294-5.1368.8307L4.8409 5.4477a.416.416 0 00-.5676-.1521.416.416 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/></svg>' },
    { match: /macos|mac/i, key: 'mac', label: 'macOS', svg: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line></svg>' },
    { match: /ios/i, key: 'ios', label: 'iOS', svg: '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.61 1.35-.55.64-.99 1.71-.86 2.72 1 .08 2.03-.53 2.55-1.22z"/></svg>' },
    { match: /windows/i, key: 'windows', label: 'Windows', svg: '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.951-1.801"/></svg>' },
    { match: /wordpress/i, key: 'wordpress', label: 'WordPress', svg: '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.486 2 2 6.486 2 12c0 4.148 2.531 7.702 6.136 9.206L4.032 9.076C4.945 9.04 6.273 8.948 6.273 8.948c.703-.046.779-1.077.078-1.077 0 0-2.348.187-3.864.187-.215 0-.472-.004-.748-.016C3.784 9.61 5.378 11.233 7.424 12.26L12 21.905l3.208-8.775L12 2zm7.429 6.035c.189.608.291 1.25.291 1.916 0 2.219-1.028 4.205-2.639 5.518l3.148-8.868c-.288.465-.561.944-.8 1.434zM12 3.659c1.942 0 3.722.68 5.12 1.815-.366.02-.733.056-1.066.056-1.748 0-2.981-.621-2.981-1.364 0-.174.054-.343.155-.507zm-7.07 8.243l3.656 10.02c-3.146-1.637-5.283-4.966-5.283-8.797 0-.422.028-.838.083-1.246.467.011 1.01.023 1.544.023z"/></svg>' },
    { match: /web|tanıtım|panel/i, key: 'web', label: 'Web', svg: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path></svg>' }
  ];

  function renderPlatformChips(platforms) {
    if (!platforms || !Array.isArray(platforms)) return '';
    const seen = new Set();
    const chips = [];

    platforms.forEach(pl => {
      PLATFORM_CONFIG.forEach(cfg => {
        if (cfg.match.test(pl) && !seen.has(cfg.key)) {
          seen.add(cfg.key);
          chips.push(`
            <span class="platform-chip" data-platform="${cfg.key}" title="${cfg.label}">
              ${cfg.svg}
              <span>${cfg.label}</span>
            </span>
          `);
        }
      });
    });

    return chips.join('');
  }

  // Helper to render squircle icon content
  function getIconContent(p) {
    if (p.iconType === 'image' && p.iconSrc) {
      return `<img src="${p.iconSrc}" alt="${p.title}" loading="lazy" onerror="this.outerHTML='<svg width=\\'28\\' height=\\'28\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\' viewBox=\\'0 0 24 24\\'><path stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' d=\\'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4\\'/></svg>'">`;
    }
    return p.iconSvg || `<svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>`;
  }

  // Render Projects Function
  function renderGallery() {
    if (!grid || typeof PROJECTS_DATA === 'undefined') return;

    const filtered = PROJECTS_DATA.filter(p => {
      const matchCat = currentCategory === 'all' || p.category === currentCategory;
      const matchSearch = !currentSearch ||
        p.title.toLowerCase().includes(currentSearch) ||
        p.tagline.toLowerCase().includes(currentSearch) ||
        p.description.toLowerCase().includes(currentSearch) ||
        p.categoryLabel.toLowerCase().includes(currentSearch) ||
        p.stack.some(s => s.toLowerCase().includes(currentSearch)) ||
        p.platforms.some(pl => pl.toLowerCase().includes(currentSearch));

      return matchCat && matchSearch;
    });

    if (counterSpan) {
      counterSpan.textContent = filtered.length;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-view">
          <div style="font-size: 2.5rem; margin-bottom: 0.75rem; opacity: 0.6;">🔍</div>
          <h3 style="font-size: 1.15rem; font-weight: 600; margin-bottom: 0.35rem; color: var(--text-primary);">Aramanızla eşleşen proje bulunamadı</h3>
          <p style="font-size: 0.875rem;">Farklı bir arama terimi deneyebilir veya kategorileri sıfırlayabilirsiniz.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(p => {
      const iconHtml = getIconContent(p);
      const platformHtml = renderPlatformChips(p.platforms);

      return `
        <article class="card-project" data-id="${p.id}" tabindex="0" role="button" aria-label="${p.title} detaylarını aç">
          <div class="card-header-symbol">
            <div class="squircle-icon-frame" style="background: ${p.iconBg || 'var(--bg-pill)'};">
              ${iconHtml}
            </div>
            
            <div class="card-meta-pills">
              <span class="tag-cat-name">${p.categoryLabel || p.category}</span>
              <span class="tag-version-code">${p.version}</span>
            </div>
          </div>
          
          <div class="card-title-row">
            <h3 class="card-h3">${p.title}</h3>
            <span class="card-arrow" aria-hidden="true">→</span>
          </div>

          <div class="card-platform-strip">
            ${platformHtml}
          </div>
          
          <div class="card-tagline-text">${p.tagline}</div>
          <p class="card-synopsis">${p.description}</p>
          
          <ul class="card-check-items">
            ${p.highlights.slice(0, 2).map(h => `
              <li>
                ${checkSvg}
                <span>${h}</span>
              </li>
            `).join('')}
          </ul>
          
          <div class="card-stack-row">
            ${p.stack.slice(0, 4).map(s => `<span class="stack-tag">${s}</span>`).join('')}
            ${p.stack.length > 4 ? `<span class="stack-tag">+${p.stack.length - 4}</span>` : ''}
          </div>
        </article>
      `;
    }).join('');

    // Attach click listeners
    document.querySelectorAll('.card-project').forEach(card => {
      const id = card.getAttribute('data-id');
      const trigger = () => openProjectModal(id);
      card.addEventListener('click', trigger);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          trigger();
        }
      });
    });
  }

  // Modal Open Handler
  function openProjectModal(id) {
    const project = PROJECTS_DATA.find(p => p.id === id);
    if (!project || !modalOverlay) return;

    modalIconContainer.innerHTML = getIconContent(project);
    modalIconContainer.style.background = project.iconBg || 'var(--bg-pill)';
    modalTitle.textContent = project.title;
    modalVersion.textContent = `${project.version} • ${project.categoryLabel}`;
    
    if (modalPlatforms) {
      modalPlatforms.innerHTML = renderPlatformChips(project.platforms);
    }

    modalTagline.textContent = project.tagline;
    modalDesc.textContent = project.description;

    // Feature highlights
    modalFeatures.innerHTML = project.highlights.map(h => `
      <li>
        ${checkSvg}
        <span>${h}</span>
      </li>
    `).join('');

    // Stack tags
    modalStack.innerHTML = project.stack.map(s => `
      <span class="stack-tag" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;">${s}</span>
    `).join('');

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeProjectModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeProjectModal();
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeProjectModal();
    }
  });

  // Initial render
  renderGallery();
});
