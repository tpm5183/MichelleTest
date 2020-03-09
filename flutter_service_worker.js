'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "656cf0ce0aa4c224c000c842800a6384",
"/assets/assets/data/GiftWise.json": "07929199159ea504a17a8b5daabe83c4",
"/assets/assets/data/Megabus.json": "84a1b6ec32bec14af179fd9a41da34fc",
"/assets/assets/data/ProjectTemplate.json": "e68c4fc053794d51339667e9007b6f18",
"/assets/assets/data/Upflex.json": "149920a47e4f7affe6ad134976b6e469",
"/assets/assets/images/flower.png": "2374f23b93f6a1109889dda13eba05e4",
"/assets/assets/images/flower2.png": "d660d2a6e56cd430d318398cf51b0590",
"/assets/assets/images/giftWise.png": "8f3aadc87480279cdcc2c3b57a733ea0",
"/assets/assets/images/GWprojectDemo.gif": "edddb9c4794e819d9dabb48556827f9e",
"/assets/assets/images/GWsection1.png": "5f308c6cb58638b2ad049446ec4e94b9",
"/assets/assets/images/GWsection10.PNG": "d730970b0503df90a6cfbc923c7dbe87",
"/assets/assets/images/GWsection11.PNG": "cb0af3c2dbee6adde76fad9f98649441",
"/assets/assets/images/GWsection12.PNG": "7d3dc51d6005d87383162756874f4a7b",
"/assets/assets/images/GWsection13.PNG": "1f19a7e77623a821bbee578c1b8c0a88",
"/assets/assets/images/GWsection14.PNG": "164a4612e59dcc9a028c7b3e81abe878",
"/assets/assets/images/GWsection2.PNG": "e96ddad279f9a7e208d38994035c5894",
"/assets/assets/images/GWsection3.PNG": "fc7fba1d556c2bd8bbf3ebd8c13a1150",
"/assets/assets/images/GWsection4.PNG": "618e27b3e7850a20207432b1b58dd6e2",
"/assets/assets/images/GWsection5.PNG": "7bb0a9e70fe60bedfa59c69a6f203d77",
"/assets/assets/images/GWsection6.PNG": "f47b4de094a05a4ed3c9c62301c1140f",
"/assets/assets/images/GWsection7.PNG": "ee783892e615e79c6ed1d10f6dea31f4",
"/assets/assets/images/GWsection8.PNG": "ebe30352218eddb49fcd5a6c7533fea7",
"/assets/assets/images/GWsection9.PNG": "3ef95fea2a946ef9f51ed3e61053d746",
"/assets/assets/images/linkedin.png": "1525e605d8d3770756debe79a422d0ac",
"/assets/assets/images/mail.png": "530de633f815983735a20ed4d1c1d3aa",
"/assets/assets/images/MBsection0.png": "4c237e7b862ddfd7d3788ea88d5225e4",
"/assets/assets/images/MBsection1.PNG": "40cd71aeba8851a98c0bfafde9a1df92",
"/assets/assets/images/MBsection10.PNG": "3d4c000dc8a26d15d10e0e8f3807d336",
"/assets/assets/images/MBsection11.PNG": "ea3e181f48641fe06415facc238be65b",
"/assets/assets/images/MBsection12.PNG": "cfc0d7cfaced4ca24a13e5c8f8d79428",
"/assets/assets/images/MBsection13.PNG": "6710c753f4bf5973e60d963cc90bf311",
"/assets/assets/images/MBsection14.png": "c389964671bcd4082d327decf93b632a",
"/assets/assets/images/MBsection2.PNG": "dcb5c4498b2ef3b5d9c234833699941f",
"/assets/assets/images/MBsection3.PNG": "30d2133cd010bfaad7856cb7f21bd6d9",
"/assets/assets/images/MBsection4.PNG": "c9c9f86db45236ae238d2a4378b638f4",
"/assets/assets/images/MBsection5.PNG": "53c4402b9030eadba9a80766d193cf6f",
"/assets/assets/images/MBsection6.PNG": "73cfea80726a65c9e64d3e385e85ebf3",
"/assets/assets/images/MBsection7.PNG": "1903b87bc47c9196a10ffe016f7c822e",
"/assets/assets/images/MBsection8.PNG": "3845813e26beb804f40c457e884bcc00",
"/assets/assets/images/MBsection9.PNG": "453715bc3dd9fc800e52b287789534cd",
"/assets/assets/images/megaBus.png": "7bc925aa86e431b5f10058c8ae57186a",
"/assets/assets/images/megaBusDemo.gif": "dd3e64634fe19831ce3015f088d8aa3b",
"/assets/assets/images/myLogo.png": "b0ae8359a2588cf45cc23300ea71d8e5",
"/assets/assets/images/resume.PNG": "7084fea155642f442f77ea03e7acebee",
"/assets/assets/images/UFBookingExisting.png": "595566992b9efd6ce5a3bdf8d1482bba",
"/assets/assets/images/UFBookingNew.png": "e9819206209cd1b9dd67a2d74985044c",
"/assets/assets/images/UFfullProtoType.gif": "e9587a7d833382f89cdba0954b9c8479",
"/assets/assets/images/UFLoginExisting.png": "42955ab2e36a129f9fe4ff33a4ea45a0",
"/assets/assets/images/UFLoginNew.png": "b50becb2fa5ec61be2c9a6db12b2dcec",
"/assets/assets/images/UFsection1.png": "7412f81dd2737ba4f03cd76d4ecf383d",
"/assets/assets/images/UFsection10.PNG": "cf8f752fd2225e777519bce5173a5133",
"/assets/assets/images/UFsection11.PNG": "6cf40baadab089e50266621f48da6981",
"/assets/assets/images/UFsection12.PNG": "a07873fa14fed70470187ae3ff739b5c",
"/assets/assets/images/UFsection13.PNG": "73263e20c40a4ffd1cd950b3b7eb489e",
"/assets/assets/images/UFsection14.PNG": "0101feb442443263bbb29cda3d6b06ed",
"/assets/assets/images/UFsection15.PNG": "d5863d4106e651e3b7caa46dcf9089f8",
"/assets/assets/images/UFsection16.PNG": "856589c5a5794061bd9034d34706b804",
"/assets/assets/images/UFsection2.PNG": "d7ac76b23d50c18931e2ab6ba24dab2f",
"/assets/assets/images/UFsection3.PNG": "277d09edc4d8e8653e8d6d5e724c437f",
"/assets/assets/images/UFsection4.PNG": "277d09edc4d8e8653e8d6d5e724c437f",
"/assets/assets/images/UFsection5.PNG": "d58bc48f792d1cfe2f46e14f56fcfce9",
"/assets/assets/images/UFsection6.PNG": "14442ee8d531d2973a47f086c74cbabc",
"/assets/assets/images/UFsection7.PNG": "7ee76148429bd1a9e069e2a2c6ed3d70",
"/assets/assets/images/UFsection8.PNG": "ccc7031f9b061636a699046b242804a1",
"/assets/assets/images/UFsection9.PNG": "a500b36bf02098451d1c1e99fa6aa438",
"/assets/assets/images/Upflex.png": "dc16ce5689e5e41065014e8294e63349",
"/assets/FontManifest.json": "7163805410241fe1438beea10f4d6067",
"/assets/fonts/BigCaslon.ttf": "35e9b70d3e6048b72ef69625e9302b13",
"/assets/fonts/Copperplate-Light.ttf": "dfe3c564b1e3a68dece0f2b124781ef0",
"/assets/fonts/Cormorant-Light.ttf": "ed6eabfab6b331894602bc29c3622d5e",
"/assets/fonts/Didot-HTF-M24-Medium.ttf": "82173891a8c7fcab744821265d4773d2",
"/assets/fonts/Halimun.ttf": "316ee285f7fbbf7d9b6781e4daa2a02c",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "062bab079ad2b7a04f4f6a9a2aa3e0a3",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "5a915f38f4d06a5a0a24bd63025ee960",
"/main.dart.js": "41257845bc5b0b871adaffaaed17c697",
"/manifest.json": "9a513e98e7c0a2ceb02c72e24ff38bd9"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
