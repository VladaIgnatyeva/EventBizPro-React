importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
  workbox.precaching.precacheAndRoute([]);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.routing.registerRoute(
  /\.(?:js|css|html)$/,
  workbox.strategies.networkFirst()
)

workbox.routing.registerRoute(
  ({event}) => event.request.destination === 'image',
  workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
  /\/|\/home/,
  workbox.strategies.networkFirst()
)

workbox.routing.registerRoute(
  /\/news/,
  workbox.strategies.networkFirst(),
  'GET'
)


// const queue = new workbox.backgroundSync.Queue('myQueueName');

// self.addEventListener('fetch', (event) => {
//   // Clone the request to ensure it's safe to read when
//   // adding to the Queue.
//   const promiseChain = fetch(event.request.clone()).catch((err) => {
//     return queue.pushRequest({request: event.request});
//   });

//   event.waitUntil(promiseChain);
// });


const bgSyncPlugin = new workbox.backgroundSync.Plugin(
  'dashboardr-queue',
  {
    callbacks: {
      maxRetentionTime: 24 * 60
      // other types of callbacks could go here
    }
  }
);

const networkWithBackgroundSync = new workbox.strategies.NetworkOnly({
  plugins: [bgSyncPlugin],
});

workbox.routing.registerRoute(
  /\/news/,
  networkWithBackgroundSync,
  'POST'
)