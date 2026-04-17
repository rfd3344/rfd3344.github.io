const CACHE_NAME = 'offline-demo-v1';

const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/js/offline-available.js',
  '/js/category-links.js',
  '/pages/local-notes.html',
  '/pages/calendar.html',

  '/manifest.json',
  '/assets/favicon.ico',
  '/assets/icon-192.jpg'
];

// Install → cache files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Caching files...');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// Fetch → serve from cache if offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});