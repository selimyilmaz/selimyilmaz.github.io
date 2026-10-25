/**
 * Selim YILMAZ - Portfolio & Project Hub Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('projectsGrid');
  const searchInput = document.getElementById('projectSearch');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const themeToggle = document.getElementById('themeToggle');
  const projectCountSpan = document.getElementById('projectCount');

  // Modal elements
  const modalBackdrop = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalVersion = document.getElementById('modalVersion');
  const modalTagline = document.getElementById('modalTagline');
  const modalDesc = document.getElementById('modalDesc');
  const modalGallery = document.getElementById('modalGallery');
  const modalFeatures = document.getElementById('modalFeatures');
  const modalStack = document.getElementById('modalStack');
  const modalClose = document.getElementById('modalClose');

  let currentCategory = 'all';
  let currentSearch = '';

  // Theme Handling
  const savedTheme = localStorage.getItem('sy_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('sy_theme', next);
      updateThemeIcon(next);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggle) return;
    themeToggle.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Aydınlık moda geç' : 'Karanlık moda geç');
  }

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter') || 'all';
      renderProjects();
    });
  });

  // Search Input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim().toLowerCase();
      renderProjects();
    });
  }

  // Render Projects Function
  function renderProjects() {
    if (!grid || typeof PROJECTS_DATA === 'undefined') return;

    const filtered = PROJECTS_DATA.filter(p => {
      const matchesCategory = currentCategory === 'all' || p.category === currentCategory;
      const matchesSearch = !currentSearch ||
        p.title.toLowerCase().includes(currentSearch) ||
        p.tagline.toLowerCase().includes(currentSearch) ||
        p.description.toLowerCase().includes(currentSearch) ||
        p.stack.some(s => s.toLowerCase().includes(currentSearch)) ||
        p.platforms.some(pl => pl.toLowerCase().includes(currentSearch));

      return matchesCategory && matchesSearch;
    });

    if (projectCountSpan) {
      projectCountSpan.textContent = filtered.length;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</div>
          <h3>Aradığınız kriterlere uygun proje bulunamadı</h3>
          <p>Farklı bir arama terimi deneyebilir veya kategorileri sıfırlayabilirsiniz.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(p => {
      const platformLabel = p.platforms.join(' • ');
      const imgSrc = p.image || 'assets/img/projects/seecore-logo-dark.png';

      return `
        <article class="project-card" data-id="${p.id}" tabindex="0" role="button" aria-label="${p.title} detaylarını aç">
          <div class="card-media">
            <img src="${imgSrc}" alt="${p.title}" loading="lazy" onerror="this.src='assets/img/projects/seecore-logo-dark.png'">
            <div class="card-media-overlay"></div>
            <div class="card-badge-row">
              <span class="badge-version">${p.version}</span>
              <span class="badge-platform">${p.status}</span>
            </div>
          </div>
          <div class="card-content">
            <h3 class="card-title">${p.title}</h3>
            <div class="card-tagline">${p.tagline}</div>
            <p class="card-desc">${p.description}</p>
            <ul class="card-highlights">
              ${p.highlights.slice(0, 2).map(h => `<li>${h}</li>`).join('')}
            </ul>
            <div class="card-stack">
              ${p.stack.slice(0, 4).map(s => `<span class="stack-pill">${s}</span>`).join('')}
              ${p.stack.length > 4 ? `<span class="stack-pill">+${p.stack.length - 4}</span>` : ''}
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach click events to cards
    document.querySelectorAll('.project-card').forEach(card => {
      const id = card.getAttribute('data-id');
      const open = () => openModal(id);
      card.addEventListener('click', open);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          open();
        }
      });
    });
  }

  // Modal Handling
  function openModal(id) {
    const project = PROJECTS_DATA.find(p => p.id === id);
    if (!project || !modalBackdrop) return;

    modalTitle.textContent = project.title;
    modalVersion.textContent = `${project.version} • ${project.platforms.join(', ')}`;
    modalTagline.textContent = project.tagline;
    modalDesc.textContent = project.description;

    // Gallery
    if (project.screenshots && project.screenshots.length > 0) {
      modalGallery.innerHTML = project.screenshots.map(s => `
        <img src="${s}" alt="${project.title} ekran görüntüsü" loading="lazy">
      `).join('');
      modalGallery.style.display = 'flex';
    } else {
      modalGallery.style.display = 'none';
    }

    // Features
    modalFeatures.innerHTML = project.highlights.map(h => `
      <li>${h}</li>
    `).join('');

    // Tech Stack
    modalStack.innerHTML = project.stack.map(s => `
      <span class="stack-pill" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">${s}</span>
    `).join('');

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });

  // Initial render
  renderProjects();
});
