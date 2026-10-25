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
    modalVersion.textContent = `${project.version} • ${project.categoryLabel} • ${project.platforms.join(' · ')}`;
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
