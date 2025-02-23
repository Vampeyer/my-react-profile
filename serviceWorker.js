// const staticDevCoffee = "dev-coffee-site-v1";
// const assets = [
//   "/",
//   "/index.html",
//   "/img",
//   "/imagespwa/coffee1.jpg",
//   "/imagespwa/coffee2.jpg",
//   "/imagespwa/coffee3.jpg",
//   "/imagespwa/coffee4.jpg",
//   "/imagespwa/coffee5.jpg",
//   "/imagespwa/coffee6.jpg",
//   "/imagespwa/coffee7.jpg",
//   "/imagespwa/coffee8.jpg",
//   "/imagespwa/coffee9.jpg"
// ];

// self.addEventListener("install", installEvent => {
//   installEvent.waitUntil(
//     caches.open(staticDevCoffee).then(cache => {
//       cache.addAll(assets);
//     })
//   );
// });

// self.addEventListener("fetch", fetchEvent => {
//   fetchEvent.respondWith(
//     caches.match(fetchEvent.request).then(res => {
//       return res || fetch(fetchEvent.request);
//     })
//   );
// });










// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", function() {
//     navigator.serviceWorker
//       .register("/serviceWorker.js")
//       .then(res => console.log("service worker registered"))
//       .catch(err => console.log("service worker not registered", err));
//   });
// }