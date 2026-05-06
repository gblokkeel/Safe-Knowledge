/* ============================================================
   SAFe Knowledge Base — Service Worker
   Caches all articles for offline use on iPhone / iPad
   ============================================================ */

const CACHE_NAME = 'safe-kb-v1';

// App shell files (always needed)
const APP_SHELL = [
  '/docs/index.html',
  '/docs/css/style.css',
  '/docs/js/app.js',
  '/docs/manifest.json',
  '/docs/icons/icon-192.png',
  '/docs/icons/icon-512.png',
];

// All content files — update this list when you add new articles
const CONTENT_FILES = [
  // Overview
  '/docs/content/overview/what-is-safe.md',
  '/docs/content/overview/safe-big-picture.md',
  '/docs/content/overview/safe-configurations.md',
  '/docs/content/overview/safe-history.md',

  // Mindset
  '/docs/content/mindset/lean-agile-mindset.md',
  '/docs/content/mindset/safe-core-values.md',
  '/docs/content/mindset/lean-agile-leadership.md',

  // Principles
  '/docs/content/principles/safe-principles-overview.md',
  '/docs/content/principles/principle-1-economic-view.md',
  '/docs/content/principles/principle-2-systems-thinking.md',
  '/docs/content/principles/principle-3-variability.md',
  '/docs/content/principles/principle-4-incremental.md',
  '/docs/content/principles/principle-5-milestones.md',
  '/docs/content/principles/principle-6-flow.md',
  '/docs/content/principles/principle-7-cadence.md',
  '/docs/content/principles/principle-8-motivation.md',
  '/docs/content/principles/principle-9-decentralize.md',
  '/docs/content/principles/principle-10-organize-around-value.md',

  // Roles
  '/docs/content/roles/agile-team.md',
  '/docs/content/roles/scrum-master.md',
  '/docs/content/roles/product-owner.md',
  '/docs/content/roles/product-manager.md',
  '/docs/content/roles/release-train-engineer.md',
  '/docs/content/roles/system-architect.md',
  '/docs/content/roles/business-owners.md',
  '/docs/content/roles/epic-owner.md',
  '/docs/content/roles/enterprise-architect.md',
  '/docs/content/roles/lean-portfolio-management.md',

  // Events
  '/docs/content/events/pi-planning.md',
  '/docs/content/events/system-demo.md',
  '/docs/content/events/inspect-and-adapt.md',
  '/docs/content/events/art-sync.md',
  '/docs/content/events/sprint-planning.md',
  '/docs/content/events/sprint-review.md',
  '/docs/content/events/sprint-retrospective.md',

  // Artifacts
  '/docs/content/artifacts/pi-objectives.md',
  '/docs/content/artifacts/program-backlog.md',
  '/docs/content/artifacts/program-board.md',
  '/docs/content/artifacts/portfolio-backlog.md',

  // Competencies
  '/docs/content/competencies/business-agility.md',
  '/docs/content/competencies/team-technical-agility.md',
  '/docs/content/competencies/agile-product-delivery.md',

  // DevOps
  '/docs/content/devops/devops-overview.md',
  '/docs/content/devops/continuous-delivery-pipeline.md',
];

// External CDN resources
const CDN_FILES = [
  'https://cdn.jsdelivr.net/npm/marked/marked.min.js',
];

const ALL_CACHE_FILES = [...APP_SHELL, ...CONTENT_FILES, ...CDN_FILES];

// ── Install: pre-cache everything ──────────────────────────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      // Cache app shell and content (relative paths)
      try {
        await cache.addAll([...APP_SHELL, ...CONTENT_FILES]);
      } catch (err) {
        console.warn('[SW] Some files could not be cached:', err);
      }
      // Cache CDN files separately (cross-origin)
      for (const url of CDN_FILES) {
        try {
          const response = await fetch(url, { mode: 'cors' });
          if (response.ok) await cache.put(url, response);
        } catch (e) {
          console.warn('[SW] Could not cache CDN file:', url);
        }
      }
    })
  );
  self.skipWaiting();
});

// ── Activate: clean up old caches ──────────────────────────────
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// ── Fetch: Cache-first for content, Network-first for others ───
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Always serve from cache if available (offline-first for content)
  if (
    event.request.method === 'GET' &&
    (url.pathname.endsWith('.md') ||
     url.pathname.endsWith('.html') ||
     url.pathname.endsWith('.css') ||
     url.pathname.endsWith('.js') ||
     url.pathname.endsWith('.json') ||
     url.pathname.endsWith('.png') ||
     url.hostname === 'cdn.jsdelivr.net')
  ) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        // Not in cache — try network and add to cache
        return fetch(event.request)
          .then((response) => {
            if (response.ok) {
              const clone = response.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
            }
            return response;
          })
          .catch(() => {
            // Offline and not cached
            if (url.pathname.endsWith('.md')) {
              return new Response(
                '# Article unavailable offline\n\nThis article has not been cached yet. Please reconnect to load it for the first time.',
                { headers: { 'Content-Type': 'text/plain' } }
              );
            }
          });
      })
    );
    return;
  }

  // For everything else: network with cache fallback
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});

// ── Background sync: update cache when online ──────────────────
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data && event.data.type === 'CACHE_ARTICLE') {
    const { url } = event.data;
    caches.open(CACHE_NAME).then(async (cache) => {
      try {
        await cache.add(url);
      } catch (e) {
        console.warn('[SW] Could not cache article:', url);
      }
    });
  }
});
