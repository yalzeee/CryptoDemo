'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9d031ed464360e46d218e6c77dee8f94",
"version.json": "79d2b0a22a2dbc79ff7bb450feedf4b7",
"index.html": "ea1aebb9ae1d29771bb2dc88e337a587",
"/": "ea1aebb9ae1d29771bb2dc88e337a587",
"main.dart.js": "b02e100bd1b1073b85266bc2c4f27a25",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "debeb0462e514c3f2c34e7d34d36b7e7",
"assets/AssetManifest.json": "bc315dc4ce3d8c9f2fa94a6c808b8891",
"assets/NOTICES": "15522886e9527f81e711ce49026bb6e8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "e5dd7be907c3979dfa93e9df2f80d4bb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/walletconnect_modal_flutter/assets/help_page/help_lock.svg": "3084e9137bc93199a6a9010f63757442",
"assets/packages/walletconnect_modal_flutter/assets/help_page/help_user.svg": "bdebb37d52892ad9c82b1f716053e4f2",
"assets/packages/walletconnect_modal_flutter/assets/help_page/help_chart.svg": "7ac5fd4b1fa05e6853229070fd380c89",
"assets/packages/walletconnect_modal_flutter/assets/help_page/help_painting.svg": "bc1f3af0e6e5c57f2e82ac74468fa31f",
"assets/packages/walletconnect_modal_flutter/assets/help_page/help_compass.svg": "7f1232ffa9fcb67e77d713eca681af2f",
"assets/packages/walletconnect_modal_flutter/assets/help_page/help_eth.svg": "baf5ae21f167b4512c2f12be3dc032b0",
"assets/packages/walletconnect_modal_flutter/assets/help_page/help_key.svg": "3a19cb388cfc0747b9517c424aaecfe9",
"assets/packages/walletconnect_modal_flutter/assets/help_page/help_noun.svg": "45ac2041d4e172746cefcb304c577bfc",
"assets/packages/walletconnect_modal_flutter/assets/help_page/help_dao.svg": "37bc884bb4c25c668e857a7b7c5b6adc",
"assets/packages/walletconnect_modal_flutter/assets/walletconnect_logo_white.svg": "e8ff0d48f55842b8fd4fb8b3b1bf01a1",
"assets/packages/walletconnect_modal_flutter/assets/walletconnect_logo_white.png": "c1cf72dee68c66b03d327add8f4fc289",
"assets/packages/walletconnect_modal_flutter/assets/walletconnect_logo_blue_solid_background.png": "30e899e365124d8d7b90200172ea8603",
"assets/packages/walletconnect_modal_flutter/assets/icons/checkmark.svg": "16b4953822c9f213fbd7fb6935604787",
"assets/packages/walletconnect_modal_flutter/assets/icons/wallet.svg": "b5271ebc38ff8e05626f29caf892d976",
"assets/packages/walletconnect_modal_flutter/assets/icons/close.svg": "d19537cfea2675df4a6dd78225ac5497",
"assets/packages/walletconnect_modal_flutter/assets/icons/copy.svg": "d82637f24b434848d68ef9b2c04be6b2",
"assets/packages/walletconnect_modal_flutter/assets/icons/scan.svg": "cb118f41ac598b9cc9c8238f396d04e9",
"assets/packages/walletconnect_modal_flutter/assets/icons/backward.svg": "86ce430b7c16d19814d67e1202dd9818",
"assets/packages/walletconnect_modal_flutter/assets/icons/qr_code.svg": "0a76f810a6278714c21e92ce0300f974",
"assets/packages/walletconnect_modal_flutter/assets/icons/error.svg": "cb53442c6b633583d74da73f4ba22e56",
"assets/packages/walletconnect_modal_flutter/assets/icons/forward.svg": "0cd7f169a1a3ad57bde801449305dc65",
"assets/packages/walletconnect_modal_flutter/assets/icons/help.svg": "df7fb7167bfd90a44fcb681a4c8d327f",
"assets/packages/walletconnect_modal_flutter/assets/walletconnect_logo_black.svg": "97e5be32d248e0e9b24fba392da1c491",
"assets/packages/walletconnect_modal_flutter/assets/walletconnect_logo_full_white.svg": "9291266ef7d759c04a3503815cf1e8b4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "cb300bf25fd4389ae89aebe959b09b60",
"assets/fonts/MaterialIcons-Regular.otf": "e75c53bc6aacd3614dc78916ba7987b6",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
