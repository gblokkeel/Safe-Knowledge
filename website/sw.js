/* ============================================================
   SAFe Knowledge Base — Service Worker
   Caches all articles for offline use on iPhone / iPad
   ============================================================ */

const CACHE_NAME = 'safe-kb-v1';

// App shell files (always needed)
const APP_SHELL = [
  '/website/index.html',
  '/website/css/style.css',
  '/website/js/app.js',
  '/website/manifest.json',
  '/website/icons/icon-192.png',
  '/website/icons/icon-512.png',
];

// All content files — update this list when you add new articles
const CONTENT_FILES = [
  // Overview
  '/content/overview/what-is-safe.md',
  '/content/overview/safe-big-picture.md',
  '/content/overview/safe-configurations.md',
  '/content/overview/safe-history.md',

  // Mindset
  '/content/mindset/lean-agile-mindset.md',
  '/content/mindset/safe-core-values.md',
  '/content/mindset/lean-agile-leadership.md',

  // Principles
  '/content/principles/safe-principles-overview.md',
  '/content/principles/principle-1-economic-view.md',
  '/content/principles/principle-2-systems-thinking.md',
  '/content/principles/principle-3-variability.md',
  '/content/principles/principle-4-incremental.md',
  '/content/principles/principle-5-milestones.md',
  '/content/principles/principle-6-flow.md',
  '/content/principles/principle-7-cadence.md',
  '/content/principles/principle-8-motivation.md',
  '/content/principles/principle-9-decentralize.md',
  '/content/principles/principle-10-organize-around-value.md',

  // Roles
  '/content/roles/agile-team.md',
  '/content/roles/scrum-master.md',
  '/content/roles/product-owner.md',
  '/content/roles/product-manager.md',
  '/content/roles/release-train-engineer.md',
  '/content/roles/system-architect.md',
  '/content/roles/business-owners.md',
  '/content/roles/epic-owner.md',
  '/content/roles/enterprise-architect.md',
  '/content/roles/lean-portfolio-management.md',

  // Events
  '/content/events/pi-planning.md',
  '/content/events/system-demo.md',
  '/content/events/inspect-and-adapt.md',
  '/content/events/art-sync.md',
  '/content/events/sprint-planning.md',
  '/content/events/sprint-review.md',
  '/content/events/sprint-retrospective.md',

  // Artifacts
  '/content/artifacts/pi-objectives.md',
  '/content/artifacts/program-backlog.md',
  '/content/artifacts/program-board.md',
  '/content/artifacts/portfolio-backlog.md',

  // Competencies
  '/content/competencies/business-agility.md',
  '/content/competencies/team-technical-agility.md',
  '/content/competencies/agile-product-delivery.md',

  // DevOps
  '/content/devops/devops-overview.md',
  '/content/devops/continuous-delivery-pipeline.md',
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
