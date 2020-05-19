let db;
let dbReq = indexedDB.open('newsDB', 1);
dbReq.onupgradeneeded = (event) => {
  // Зададим переменной db ссылку на базу данных
  db = event.target.result;
  // Создадим хранилище объектов с именем notes.
  let news = db.createObjectStore('news', { autoIncrement: true });
}
dbReq.onsuccess = (event) => {
  db = event.target.result;
}
dbReq.onerror = (event) => {
  alert('error opening database ' + event.target.errorCode);
}


let CACHE_NAME = 'your-app-name';
let urlsToCache = [
  '/',
  '/home',
  '/profile',
  '/news',
  '/login'
];

// Install a service worker
self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('Opened cache');

        return cache.addAll(urlsToCache);
      })
  );
});

// Cache and return requests
self.addEventListener('fetch', event => {
  if (event.request.method == "POST") {    
    let clone = event.request.clone();
    return fetch(event.request).catch(() => {
      let tx = db.transaction(['news'], 'readwrite');
      let store = tx.objectStore('news');
      store.add(clone);
    });
  }
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        console.log('response ', response)
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

// Update a service worker
self.addEventListener('activate', event => {
  let cacheWhitelist = ['your-app-name'];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});