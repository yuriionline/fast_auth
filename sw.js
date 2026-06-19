const CACHE_NAME = 'fast-authenticator-v5';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './og-image.png'
];

// Install Event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate Event (Cleanup Old Caches)
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event (Cache-First with Network Fallback & dynamic font caching)
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then(response => {
          // Dynamic caching for Google Fonts
          if (event.request.url.includes('fonts.googleapis.com') || event.request.url.includes('fonts.gstatic.com')) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          // If both fail and request is for page, return a basic offline response
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
          return new Response('Network error occurred.', { status: 408, headers: { 'Content-Type': 'text/plain' } });
        });
    })
  );
});
