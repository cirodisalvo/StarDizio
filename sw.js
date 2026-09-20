self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Risposta standard per soddisfare i requisiti PWA
  event.respondWith(fetch(event.request));
});
