const CACHE_NAME = 'kazprix-v1';
const ASSETS = [
  '/kazprix/',
  '/kazprix/index.html',
  '/kazprix/manifest.json',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
