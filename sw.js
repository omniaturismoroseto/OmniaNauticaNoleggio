// Service worker minimo: necessario ai browser per considerare il sito
// installabile come app. Non effettua caching aggressivo: lascia che le
// richieste vadano sempre in rete, così il calendario resta sempre aggiornato.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
