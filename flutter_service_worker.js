'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2720b4d4cf50fd85678b9bd87529accf",
"assets/assets/images/bg_category.png": "f9de9b31fe3f929ff1bfdd0e5cfc50bf",
"assets/assets/images/icon.png": "304cedb2b71a6b6a6553057a2476f54e",
"assets/assets/images/icon.psd": "9ede635cb4bc18467b09179446e16b8a",
"assets/assets/images/icon_android.png": "a501050035bd35303adb4f6666eaf49f",
"assets/assets/images/logo.png": "fd978febb57dd8b34ef76324e50b0892",
"assets/assets/images/logo.psd": "5f58925f20c669d937d5fb8545d035ed",
"assets/assets/images/marker.png": "d387d4ec5bfa18ba4e3ad8f76ae37e4c",
"assets/assets/images/no_avatar.png": "6b504b8de3dc39a47ddde78c8f1aaaff",
"assets/assets/images/no_avatar.psd": "6a151a1720534cb6672430caf4c0c6d4",
"assets/assets/images/no_image.png": "8380890f67f86c86c386324be7cbbfed",
"assets/assets/lang/ar.json": "2639eeb2328af2d482f3290d961ddb68",
"assets/assets/lang/en.json": "583bea5f24e40f0ac282bded9ab9bb9c",
"assets/assets/lang/tr.json": "5fadc4dfef07d70186647fb12b2f5ec9",
"assets/assets/lang/zh.json": "f9fe14396d1e7deb972e24e7ce65ef25",
"assets/FontManifest.json": "0b51bf6567ebaaedc32c4f9c2a2f13a3",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/google_fonts/OFL.txt": "481fed197dac47775fb62cefafa2555e",
"assets/google_fonts/Poppins-Black.ttf": "0573b9231a8316427ad6e751b52e87a4",
"assets/google_fonts/Poppins-BlackItalic.ttf": "3fb21c8084013f3d0176bc98bcf76e60",
"assets/google_fonts/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/google_fonts/Poppins-BoldItalic.ttf": "09775bde3e9448b38c063b746e21cb6b",
"assets/google_fonts/Poppins-ExtraBold.ttf": "544fa4f2678a8285eb88b8dfe503c90c",
"assets/google_fonts/Poppins-ExtraBoldItalic.ttf": "29f7dd016eeed2bcd79ba482eb3f27ec",
"assets/google_fonts/Poppins-ExtraLight.ttf": "86a2f13e91ac85080ebaeaab9463b9f1",
"assets/google_fonts/Poppins-ExtraLightItalic.ttf": "05139b6509a2baa8f188fbade78fc3ed",
"assets/google_fonts/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/google_fonts/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/google_fonts/Poppins-LightItalic.ttf": "1eaf3af47612e6163a2e27e847c6ac7d",
"assets/google_fonts/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/google_fonts/Poppins-MediumItalic.ttf": "1749e4b603749026393f64506a3bcbbe",
"assets/google_fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/google_fonts/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/google_fonts/Poppins-SemiBoldItalic.ttf": "378a091bc1b1e6e6d6327beb6bfb07b9",
"assets/google_fonts/Poppins-Thin.ttf": "25cd0f688f815bc4f6ac2b71eb6278ba",
"assets/google_fonts/Poppins-ThinItalic.ttf": "c93e22e98b7a8d58f83ce42b278815eb",
"assets/NOTICES": "37b9fab3effc79490ade6aac25601266",
"assets/packages/awesome_icons/fonts/Brands-Regular-400.otf": "f020d1af67791647fbb1a40daea48e32",
"assets/packages/awesome_icons/fonts/Free-Regular-400.otf": "23edbee684b5998da2c85348a1485c66",
"assets/packages/awesome_icons/fonts/Free-Solid-900.otf": "8d531d92051cddac77556d0734b701f8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/feather_icons/fonts/feather.ttf": "ad5435302c3c2d1f23f275d0f22d36c6",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "146c039b069375441c67f8a5f71085af",
"firebase-messaging-sw.js": "a3c8b54d9093dc7e954df3bf40e9d518",
"flutter_facebook_auth.js": "907649ab35a69b99e94f8dd75bece03b",
"icons/Icon-192.png": "432063dd797a55887d072e87698c7474",
"icons/Icon-512.png": "540b2bba372c60b1d5b46b699954e099",
"index.html": "dbf37160ac65a6785577338d31437a65",
"/": "dbf37160ac65a6785577338d31437a65",
"index_2_0_1.html": "4e827cc9c27ff2fa6be05b81994bb311",
"main.dart.js": "f6c10dfe2d3efddbc63430f0d79efd5b",
"manifest.json": "ba87885c3938c828cd0be98d0022e1cf",
"version.json": "8ee9059f9ef0a27c68c117ede46d6b10"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
