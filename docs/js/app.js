/* ============================================================
   SAFe Knowledge Base — App.js
   Handles: navigation, markdown rendering, search, theme
   ============================================================ */

// ──────────────────────────────────────────────────────────────
// CONTENT INDEX
// Add new articles here: { id, title, category, file }
// ──────────────────────────────────────────────────────────────
const CONTENT_INDEX = [
  // Overview
  { id: "overview/what-is-safe",       title: "What is SAFe?",               category: "Overview",        icon: "🚀", file: "content/overview/what-is-safe.md" },
  { id: "overview/safe-big-picture",   title: "The SAFe Big Picture",        category: "Overview",        icon: "🗺️", file: "content/overview/safe-big-picture.md" },
  { id: "overview/safe-configurations",title: "SAFe Configurations",         category: "Overview",        icon: "⚙️", file: "content/overview/safe-configurations.md" },
  { id: "overview/safe-history",       title: "History of SAFe",             category: "Overview",        icon: "📖", file: "content/overview/safe-history.md" },

  // Lean-Agile Mindset
  { id: "mindset/lean-agile-mindset",  title: "Lean-Agile Mindset",          category: "Mindset & Values", icon: "🧠", file: "content/mindset/lean-agile-mindset.md" },
  { id: "mindset/safe-core-values",    title: "SAFe Core Values",            category: "Mindset & Values", icon: "💎", file: "content/mindset/safe-core-values.md" },
  { id: "mindset/lean-agile-leadership",title: "Lean-Agile Leadership",      category: "Mindset & Values", icon: "🎯", file: "content/mindset/lean-agile-leadership.md" },

  // SAFe Principles
  { id: "principles/safe-principles-overview", title: "Principles Overview", category: "SAFe Principles", icon: "⚖️", file: "content/principles/safe-principles-overview.md" },
  { id: "principles/principle-1-economic-view",title: "#1 Economic View",    category: "SAFe Principles", icon: "💰", file: "content/principles/principle-1-economic-view.md" },
  { id: "principles/principle-2-systems-thinking", title: "#2 Systems Thinking", category: "SAFe Principles", icon: "🔄", file: "content/principles/principle-2-systems-thinking.md" },
  { id: "principles/principle-3-variability",  title: "#3 Variability",      category: "SAFe Principles", icon: "🎲", file: "content/principles/principle-3-variability.md" },
  { id: "principles/principle-4-incremental",  title: "#4 Incremental Build",category: "SAFe Principles", icon: "📈", file: "content/principles/principle-4-incremental.md" },
  { id: "principles/principle-5-milestones",   title: "#5 Milestones",       category: "SAFe Principles", icon: "🏁", file: "content/principles/principle-5-milestones.md" },
  { id: "principles/principle-6-flow",         title: "#6 Make Value Flow",  category: "SAFe Principles", icon: "🌊", file: "content/principles/principle-6-flow.md" },
  { id: "principles/principle-7-cadence",      title: "#7 Cadence & Sync",   category: "SAFe Principles", icon: "🥁", file: "content/principles/principle-7-cadence.md" },
  { id: "principles/principle-8-motivation",   title: "#8 Motivation",       category: "SAFe Principles", icon: "✨", file: "content/principles/principle-8-motivation.md" },
  { id: "principles/principle-9-decentralize", title: "#9 Decentralize",     category: "SAFe Principles", icon: "🌐", file: "content/principles/principle-9-decentralize.md" },
  { id: "principles/principle-10-organize-around-value", title: "#10 Organize Around Value", category: "SAFe Principles", icon: "🎯", file: "content/principles/principle-10-organize-around-value.md" },

  // Roles
  { id: "roles/agile-team",            title: "Agile Team",                  category: "Roles",           icon: "👥", file: "content/roles/agile-team.md" },
  { id: "roles/scrum-master",          title: "Scrum Master",                category: "Roles",           icon: "🧭", file: "content/roles/scrum-master.md" },
  { id: "roles/product-owner",         title: "Product Owner",               category: "Roles",           icon: "📋", file: "content/roles/product-owner.md" },
  { id: "roles/product-manager",       title: "Product Manager",             category: "Roles",           icon: "🗂️", file: "content/roles/product-manager.md" },
  { id: "roles/release-train-engineer",title: "Release Train Engineer",      category: "Roles",           icon: "🚂", file: "content/roles/release-train-engineer.md" },
  { id: "roles/system-architect",      title: "System Architect/Engineer",   category: "Roles",           icon: "🏗️", file: "content/roles/system-architect.md" },
  { id: "roles/business-owners",       title: "Business Owners",             category: "Roles",           icon: "💼", file: "content/roles/business-owners.md" },
  { id: "roles/epic-owner",            title: "Epic Owner",                  category: "Roles",           icon: "📌", file: "content/roles/epic-owner.md" },
  { id: "roles/enterprise-architect",  title: "Enterprise Architect",        category: "Roles",           icon: "🏢", file: "content/roles/enterprise-architect.md" },
  { id: "roles/lean-portfolio-management", title: "Lean Portfolio Mgmt",     category: "Roles",           icon: "📊", file: "content/roles/lean-portfolio-management.md" },

  // Events
  { id: "events/pi-planning",          title: "PI Planning",                 category: "Events & Ceremonies", icon: "📅", file: "content/events/pi-planning.md" },
  { id: "events/system-demo",          title: "System Demo",                 category: "Events & Ceremonies", icon: "🖥️", file: "content/events/system-demo.md" },
  { id: "events/inspect-and-adapt",    title: "Inspect & Adapt",             category: "Events & Ceremonies", icon: "🔍", file: "content/events/inspect-and-adapt.md" },
  { id: "events/art-sync",             title: "ART Sync (SoS & PO Sync)",   category: "Events & Ceremonies", icon: "🔗", file: "content/events/art-sync.md" },
  { id: "events/sprint-planning",      title: "Sprint Planning",             category: "Events & Ceremonies", icon: "✏️", file: "content/events/sprint-planning.md" },
  { id: "events/sprint-review",        title: "Sprint Review",               category: "Events & Ceremonies", icon: "✅", file: "content/events/sprint-review.md" },
  { id: "events/sprint-retrospective", title: "Sprint Retrospective",        category: "Events & Ceremonies", icon: "🔁", file: "content/events/sprint-retrospective.md" },

  // Artifacts
  { id: "artifacts/pi-objectives",     title: "PI Objectives",               category: "Artifacts",       icon: "🎯", file: "content/artifacts/pi-objectives.md" },
  { id: "artifacts/program-backlog",   title: "Program Backlog",             category: "Artifacts",       icon: "📝", file: "content/artifacts/program-backlog.md" },
  { id: "artifacts/program-board",     title: "Program Board",               category: "Artifacts",       icon: "📌", file: "content/artifacts/program-board.md" },
  { id: "artifacts/portfolio-backlog", title: "Portfolio Backlog",           category: "Artifacts",       icon: "📦", file: "content/artifacts/portfolio-backlog.md" },

  // Configurations
  { id: "overview/safe-configurations",title: "SAFe Configurations",        category: "Configurations",  icon: "⚙️", file: "content/overview/safe-configurations.md" },

  // Core Competencies
  { id: "competencies/business-agility",    title: "Business Agility",      category: "Core Competencies", icon: "🏢", file: "content/competencies/business-agility.md" },
  { id: "competencies/team-technical-agility", title: "Team & Technical Agility", category: "Core Competencies", icon: "⚡", file: "content/competencies/team-technical-agility.md" },
  { id: "competencies/agile-product-delivery", title: "Agile Product Delivery", category: "Core Competencies", icon: "🚀", file: "content/competencies/agile-product-delivery.md" },

  // DevOps
  { id: "devops/devops-overview",      title: "DevOps Overview",             category: "DevOps & CDP",    icon: "⚙️", file: "content/devops/devops-overview.md" },
  { id: "devops/continuous-delivery-pipeline", title: "Continuous Delivery Pipeline", category: "DevOps & CDP", icon: "🔧", file: "content/devops/continuous-delivery-pipeline.md" },
];

// Group by category
const CATEGORIES = {};
CONTENT_INDEX.forEach(item => {
  if (!CATEGORIES[item.category]) CATEGORIES[item.category] = [];
  // Avoid duplicates in category groups
  if (!CATEGORIES[item.category].find(x => x.id === item.id)) {
    CATEGORIES[item.category].push(item);
  }
});

// ──────────────────────────────────────────────────────────────
// STATE
// ──────────────────────────────────────────────────────────────
let currentArticleId = null;
let contentCache = {};
let searchDebounceTimer = null;

// ──────────────────────────────────────────────────────────────
// THEME
// ──────────────────────────────────────────────────────────────
function getTheme() {
  return localStorage.getItem('safe-theme') || 'light';
}

function setTheme(theme) {
  document.body.className = theme;
  localStorage.setItem('safe-theme', theme);
  const icon = theme === 'dark' ? '☀️' : '🌙';
  document.querySelectorAll('.theme-icon').forEach(el => el.textContent = icon);
  const mobileBtn = document.getElementById('theme-toggle-mobile');
  if (mobileBtn) mobileBtn.textContent = icon;
}

function toggleTheme() {
  setTheme(getTheme() === 'dark' ? 'light' : 'dark');
}

// ──────────────────────────────────────────────────────────────
// SIDEBAR NAVIGATION
// ──────────────────────────────────────────────────────────────
function buildNav() {
  const navTree = document.getElementById('nav-tree');
  navTree.innerHTML = '';

  const categoryOrder = [
    'Overview', 'Mindset & Values', 'SAFe Principles', 'Roles',
    'Events & Ceremonies', 'Artifacts', 'Core Competencies', 'DevOps & CDP'
  ];

  const orderedCategories = [
    ...categoryOrder.filter(c => CATEGORIES[c]),
    ...Object.keys(CATEGORIES).filter(c => !categoryOrder.includes(c))
  ];

  orderedCategories.forEach(categoryName => {
    const items = CATEGORIES[categoryName];
    if (!items || items.length === 0) return;

    const section = document.createElement('div');
    section.className = 'nav-section';
    section.dataset.category = categoryName;

    // Check if this section should be open
    const isActiveSection = items.some(i => i.id === currentArticleId);
    if (isActiveSection) section.classList.add('open');

    const header = document.createElement('div');
    header.className = 'nav-section-header';
    header.innerHTML = `<span>${categoryName}</span><span class="nav-section-toggle">▶</span>`;
    header.addEventListener('click', () => {
      section.classList.toggle('open');
    });

    const itemsContainer = document.createElement('div');
    itemsContainer.className = 'nav-items';

    items.forEach(item => {
      const navItem = document.createElement('div');
      navItem.className = 'nav-item' + (item.id === currentArticleId ? ' active' : '');
      navItem.dataset.articleId = item.id;
      navItem.innerHTML = `<span class="nav-item-icon">${item.icon || '📄'}</span><span>${item.title}</span>`;
      navItem.addEventListener('click', () => {
        closeMobileSidebar();
        loadArticle(item.id);
      });
      itemsContainer.appendChild(navItem);
    });

    section.appendChild(header);
    section.appendChild(itemsContainer);
    navTree.appendChild(section);
  });
}

function updateNavActiveState(articleId) {
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.articleId === articleId);
  });
  // Open the parent section
  document.querySelectorAll('.nav-section').forEach(section => {
    const hasActive = Array.from(section.querySelectorAll('.nav-item'))
      .some(el => el.dataset.articleId === articleId);
    if (hasActive) section.classList.add('open');
  });
}

// ──────────────────────────────────────────────────────────────
// ARTICLE LOADING
// ──────────────────────────────────────────────────────────────
async function loadArticle(articleId) {
  const article = CONTENT_INDEX.find(a => a.id === articleId);
  if (!article) {
    showError(`Article "${articleId}" not found.`);
    return;
  }

  currentArticleId = articleId;
  updateNavActiveState(articleId);
  updateBreadcrumb(article);
  updatePageTitle(article.title);
  updateURL(articleId);

  // Show loading
  document.getElementById('article-body').innerHTML = `
    <div class="loading">
      <div class="spinner"></div>
      <span>Loading article…</span>
    </div>`;
  document.getElementById('article-title').textContent = article.title;
  document.getElementById('article-title').style.display = 'block';

  // Scroll to top
  document.getElementById('main-content').scrollTo(0, 0);
  window.scrollTo(0, 0);

  try {
    let markdown;
    if (contentCache[articleId]) {
      markdown = contentCache[articleId];
    } else {
      const res = await fetch(article.file);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      markdown = await res.text();
      contentCache[articleId] = markdown;
    }

    const html = marked.parse(markdown);
    const body = document.getElementById('article-body');
    body.innerHTML = html;

    // Extract H1 for the article header title (hide the H1 from the body if present)
    const h1 = body.querySelector('h1');
    if (h1) {
      document.getElementById('article-title').textContent = h1.textContent;
      h1.style.display = 'none';
    }

    // Make internal links work
    body.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      const internalArticle = CONTENT_INDEX.find(a =>
        href.includes(a.title.toLowerCase().replace(/\s+/g, '-')) ||
        href === a.id
      );
      if (!href.startsWith('http') && !href.startsWith('#')) {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          // Try to find the article
          const found = CONTENT_INDEX.find(a =>
            a.id.includes(href.replace('../content/', '').replace('.md', ''))
          );
          if (found) loadArticle(found.id);
        });
      }
    });

  } catch (err) {
    showError(`Could not load the article. <br><small>${err.message}</small>`);
  }
}

function showError(message) {
  document.getElementById('article-body').innerHTML = `
    <div class="error-state">
      <h3>⚠️ Could not load article</h3>
      <p>${message}</p>
      <p>Make sure you're running this from a local server. See the README for instructions.</p>
    </div>`;
}

function updateBreadcrumb(article) {
  const breadcrumb = document.getElementById('breadcrumb');
  breadcrumb.innerHTML = `
    <span>SAFe KB</span>
    <span class="breadcrumb-sep">›</span>
    <span>${article.category}</span>
    <span class="breadcrumb-sep">›</span>
    <span>${article.title}</span>
  `;
}

function updatePageTitle(title) {
  document.title = `${title} — SAFe Knowledge Base`;
}

function updateURL(articleId) {
  const url = new URL(window.location);
  url.searchParams.set('article', articleId);
  history.pushState({ articleId }, '', url);
}

// ──────────────────────────────────────────────────────────────
// SEARCH
// ──────────────────────────────────────────────────────────────
function setupSearch() {
  const input = document.getElementById('search-input');
  const dropdown = document.getElementById('search-results');

  input.addEventListener('input', () => {
    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(() => performSearch(input.value.trim()), 150);
  });

  input.addEventListener('focus', () => {
    if (input.value.trim()) performSearch(input.value.trim());
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.style.display = 'none';
    }
  });
}

function performSearch(query) {
  const dropdown = document.getElementById('search-results');
  if (!query) { dropdown.style.display = 'none'; return; }

  const q = query.toLowerCase();
  const results = CONTENT_INDEX.filter(item => {
    const inTitle = item.title.toLowerCase().includes(q);
    const inCategory = item.category.toLowerCase().includes(q);
    const inContent = contentCache[item.id] ? contentCache[item.id].toLowerCase().includes(q) : false;
    return inTitle || inCategory || inContent;
  }).slice(0, 8);

  if (results.length === 0) {
    dropdown.innerHTML = `<div class="search-no-results">No articles found for "${query}"</div>`;
    dropdown.style.display = 'block';
    return;
  }

  dropdown.innerHTML = results.map(item => {
    let snippet = '';
    if (contentCache[item.id]) {
      const idx = contentCache[item.id].toLowerCase().indexOf(q);
      if (idx !== -1) {
        const start = Math.max(0, idx - 30);
        const end = Math.min(contentCache[item.id].length, idx + 60);
        snippet = '…' + contentCache[item.id].slice(start, end).replace(/[#*`]/g, '') + '…';
      }
    }
    return `
      <div class="search-result-item" data-article-id="${item.id}">
        <div class="search-result-title">${item.icon} ${item.title}</div>
        <div class="search-result-category">${item.category}</div>
        ${snippet ? `<div class="search-result-snippet">${snippet}</div>` : ''}
      </div>`;
  }).join('');

  dropdown.querySelectorAll('.search-result-item').forEach(el => {
    el.addEventListener('click', () => {
      loadArticle(el.dataset.articleId);
      dropdown.style.display = 'none';
      document.getElementById('search-input').value = '';
    });
  });

  dropdown.style.display = 'block';
}

// ──────────────────────────────────────────────────────────────
// MOBILE SIDEBAR
// ──────────────────────────────────────────────────────────────
function setupMobileSidebar() {
  const menuBtn = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');

  menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('visible');
  });

  overlay.addEventListener('click', closeMobileSidebar);
}

function closeMobileSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('visible');
}

// ──────────────────────────────────────────────────────────────
// WELCOME PAGE CARDS
// ──────────────────────────────────────────────────────────────
function setupWelcomeCards() {
  document.querySelectorAll('.welcome-card[data-article]').forEach(card => {
    card.addEventListener('click', () => {
      const articleId = card.dataset.article;
      if (articleId) loadArticle(articleId);
    });
  });
}

// ──────────────────────────────────────────────────────────────
// ROUTER (URL-based navigation)
// ──────────────────────────────────────────────────────────────
function handleRoute() {
  const url = new URL(window.location);
  const articleId = url.searchParams.get('article');
  if (articleId) {
    loadArticle(articleId);
  }
}

window.addEventListener('popstate', (e) => {
  if (e.state && e.state.articleId) {
    loadArticle(e.state.articleId);
  }
});

// ──────────────────────────────────────────────────────────────
// INIT
// ──────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Apply saved theme
  setTheme(getTheme());

  // Theme toggles
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  const mobileThemeBtn = document.getElementById('theme-toggle-mobile');
  if (mobileThemeBtn) mobileThemeBtn.addEventListener('click', toggleTheme);

  // Build navigation
  buildNav();

  // Setup search
  setupSearch();

  // Mobile sidebar
  setupMobileSidebar();

  // Welcome page cards
  setupWelcomeCards();

  // Route to article if URL param present
  handleRoute();

  // Configure marked
  marked.setOptions({
    breaks: true,
    gfm: true,
  });
});
