'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "8d2bcef44692cc9655e237e069df72fe",
"version.json": "167a0a7a7a366e4c70ae588f4698383c",
"index.html": "0d72404a5838c162a52e0c550927baa6",
"/": "0d72404a5838c162a52e0c550927baa6",
"main.dart.js": "07379dda0e296749f047ce0c9e496917",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "cef6e631a6dda0a01d056a27285970f0",
"icons/Icon-192.png": "0f71e4df5dc2cd425eb949153fd543a4",
"icons/Icon-maskable-192.png": "0f71e4df5dc2cd425eb949153fd543a4",
"icons/Icon-maskable-512.png": "9d78a4252ab792ba64f47a0bbb9373d1",
"icons/Icon-512.png": "9d78a4252ab792ba64f47a0bbb9373d1",
"manifest.json": "786ec37a7f7ba737c73bd156b7ad7e9c",
".git/config": "7d65bd265eab54b0d070bbb53062eace",
".git/objects/92/17413155c6d24e6a13ac13fa1f6493e09e0f49": "138cd3827980c6d455d1993f84462caa",
".git/objects/57/67a1d7863c6415e0132183a5fe16a6bf0761f3": "5a61873f73239c5531ec17af0a3f201b",
".git/objects/6f/677b9dc3fe747f9bf9a013208ab37aa8aa487a": "a9fd9dd3cb2a80875a9284a0de0306ff",
".git/objects/35/6ba7ea49b28827d29c4d871a006bd2f4b7c8c0": "2d86611dbd4da232b087470659471bd8",
".git/objects/3d/d9c7afb53d16abfbdea37b2799e1718c4002df": "18bf32f9afc720b60999fee8781767a5",
".git/objects/60/28741b3073c41bc718c05cc7e96cf5931b7bb5": "ba3976f4ad19ee4280dd28e77beb9cfd",
".git/objects/34/5e359d643e0301957ef3cc1a3a5b33d5f5e826": "b58f67e53ad544005480c174f8cf931e",
".git/objects/5a/9220f878c34631f9f67853c3f0015c7eac7abb": "1bbf747ce47b895978d674f1b4233fa2",
".git/objects/5f/24b55a3d3b1118cdec4c9cce2e36c2da5bfa6c": "7755df6d0435bf498f3d2c0fe7786010",
".git/objects/5f/8c3023be429cc3f0976184c44903cd366404fe": "58fc2e035c78cf81a2bdd1ad5f925a29",
".git/objects/b5/ed674974dc14867e9befdf47ac039bfbce80a6": "0524aed1b3200f2b8646df470d073dd8",
".git/objects/ac/ed138423c721c9b62ccd95e39cf19c6f15dbc1": "9f63b101bf069c2299156beb2cf090bd",
".git/objects/b3/490a2d2e456cec34d2e76b7477661e1d3da17e": "0e7dc592d8e123bd534e8f4dc7bb8c11",
".git/objects/d1/d62b1662f1904e26f22319abe0dacc8b149b6a": "feea6bcd4569a1ae87005c84cc5ab7ca",
".git/objects/d1/a6c03e5c031853a7523955eb7d09fc5bb06cc4": "fbf464a7c25cb6cc6ad95f66e3346d93",
".git/objects/ab/815b51a4a034b65a9d60b70cd0caed9f0e2b19": "b50a52045d40d4f483c39c5f5696c398",
".git/objects/f4/1e5bd588eaf43c920dc687d69d7fa9a507fbfa": "580049a80be0b83d536a45458dd8831a",
".git/objects/f4/ef66889c8ad50c847d4b6ab214f801e65d3015": "da6f5ffcb61be6273f50e3822e3e6096",
".git/objects/c9/4473c59ae19aefa866f52d7abd91cd098c4891": "b04aca8373a6c16fd8e6f1fa463e814e",
".git/objects/fd/7a23145be091ec1cca1e948e4e613acdaa4093": "34c27de20f4b14807825adcab5e60fce",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/c1/6f1903d40cabf388d836c43f9347238d9a754f": "a5172aa66521dfbb626ae135d42b1d1a",
".git/objects/c1/da2aea57a5d1d587c82ee2708d25a30b690d46": "a380283218aa018d87fccc5161cabe6c",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/20/142f77d58888d1535267887ef215a500963f5b": "00a7d8fd50541e8e8ffe6d06ec289fdc",
".git/objects/20/c9bd368c5b92d7a23647712bfaf79720727734": "c0de10800626fe24b6bdcc7ffe9b8f42",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/97ae3d96a2659a03a239dd73c07573686eaee7": "97c64dbecad84a0e7468120cce8575be",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/7c90991a17ad554145aad8090ee9e59f0445dd": "8e1a21fee2a8fb2a3f6ab02999843f08",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/80/021099f8187c2e5ad66707f8764a5ce6127130": "07c51c6e4ebd592821b32918d9eb4e4c",
".git/objects/74/fcfbe1e81e785ccb890183c4831952b866d07b": "4920468f3660b2fb86c073d8bad22152",
".git/objects/28/8e79230c83aefa4e146833e470fbe3dcaeff29": "027e965ecafd34b43c87812a2d0a07a4",
".git/objects/72/551ef7ea0c48c76495e3bd5797f3ee2597fc67": "fc23e83c3459ddc63d85f32cba2dd09f",
".git/objects/00/f52877d19c0c59cb186faf6277f037473b9e5a": "2a075a89675fcd6352e70d058fa9904e",
".git/objects/9a/a1e3225e00417b603b71392d83afbec2ff6006": "aec061b04aafd074506076990a3788d5",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/06/de4e75b2031e4c921e2c9845fcd0fb10b5b4d1": "1ecae3888b61e7c27ca7635b6e1dce39",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/4bff5ef6ec747677986a9df14283cf99633213": "61770a099974c6b0341e5d8b56078486",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/dd/7acd95fbb634ebbc6cf98031b011e7505e1906": "833509616aa95ba4a59d8e558e4d7989",
".git/objects/b6/8e1faf1605d69cab2b7df85d68a725c7b35c77": "596d2c66429874555f15cf047b4848cb",
".git/objects/d5/2e5715e9157881e29d2dde97eece23ef84f5ec": "ebf22bc106b8ae2a641269b92532b3d8",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/a6/097d3d5c5390c5936f8b2df883d34d68359377": "ab69825f6193347b75201dfb52c8fa23",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/cc/65c98e6a3a11532b4f6b1a17cafcd99977ba3f": "14908e48d049fa4d5cbfdec6ff651c08",
".git/objects/e8/6e19d678e575d4b8d0eacd080739451660746b": "97be6afbf3406da8cc2b7cdc1eaf3c1d",
".git/objects/f6/248560b77781b33a3f99193f2f9c1beea578d4": "062ec001f019ade47c32f6c12dc142ef",
".git/objects/f1/4ae3ecc05a3aed1f1ced9956a3a000aeee2cd7": "fdf6cef4e3cfda2892781a3f85c26a54",
".git/objects/e0/d5c2cf75f8091bb427a90355f6dd0f9bb2fa0e": "d1c53eb32bf718f6627e125c13870611",
".git/objects/2d/2a0ce09e2fe7fb2f927837e64ea371a46eaea0": "c8af9f960952f9f79ff1079319096ced",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/77/5a1744fcd83637eec40073dae08d28bb982ed0": "df2b1e194c14cfe975c82c23b3791aa6",
".git/objects/77/1ae71f41f7502ae0af2a1c3ee7234002952e6b": "f63252b37eb50d68841955def18bd094",
".git/objects/70/efa3709a2bceca4e391e7c5ef58b1ec90472a0": "e1a595744bd4a869a22667f772a5471b",
".git/objects/70/dba4273f9e903537a5fc687ab016fc6562588a": "e9746848c74e7b30e8fc060b2da7c2e9",
".git/objects/24/ede18e5533f6ece694d73ab5fec18db46e0aa5": "ef37618b10a80f539f14acf80513b90d",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/12/07439f61c55416e8a6f281a8ed6ad0161e26d6": "f45d858d60fde256f6ba2cf7b5683207",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/82/2b664d161d3388f1203467a26835c9e784f78e": "1220995160969687fd42843ce1b25432",
".git/objects/22/556a841d3537a0833274e57e5a648864a05d82": "b7b8916f1f197e4bf07f44663ea325c1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9d38e527ca782edf5c54a8f6e3e7ce42",
".git/logs/refs/heads/main": "edfcd94215093bff5fbb6a5e5e2362a7",
".git/logs/refs/remotes/origin/main": "e723f8c6d570a15dd1ef085bfdacb84e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "8aee9ae8cb2a13684c9bbc90424938e3",
".git/refs/remotes/origin/main": "e4d248d9176936c03bc7e1973803ef9a",
".git/index": "05a116eb2a4297d6899f361061870b78",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/FETCH_HEAD": "7c1e3a13233a169f5cbd2fb6f486d98e",
"assets/AssetManifest.json": "6018a1a00f4ff99656e7ca125ff3ec36",
"assets/NOTICES": "22698af0abf8213482f29442013bf130",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "725788d51765d5dca222d015b0c3f000",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "c7b13b02c9dd7527326716dfddc40b26",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0bfcc89b0c7c8c43c458ee6ad9277c3f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "fe915e2554e9195ed8622129ac267edd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "602de6b4a49f8352d910bb398f596435",
"assets/fonts/MaterialIcons-Regular.otf": "84ebb76fdd48ddd0efa6e4513d2380a9",
"assets/assets/images/icon.png": "a6be90ad3c3da4178192185c9ecb7ea1",
"assets/assets/images/geotech.png": "a3fbcb139d654b5b91e680309c754a5e",
"assets/assets/images/no.png": "ada0529a785642ba070674a6d0052c27",
"assets/assets/images/emptycard.png": "a85fcd4ab5dec0f75a47abe0d69a6bc8",
"assets/assets/images/customshape.png": "963b5924aa915ba7b1a60adcebf9afba",
"assets/assets/images/geotechtext.png": "1558b9e5e7256a85371ce25f695871b9",
"assets/assets/images/image.png": "0c4534bac2810e2dec4d096a8bf211a0",
"assets/assets/logo/icon.png": "a6be90ad3c3da4178192185c9ecb7ea1",
"assets/assets/logo/icon2.png": "8ceaafd836277b9085dec6a648bbcad7",
"assets/assets/logo/logo.png": "df0a3311177ff4d34ec2133c682ccae4",
"assets/assets/logo/svg.svg": "62b5a136898b23d6829a0d7334b3de93",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
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
