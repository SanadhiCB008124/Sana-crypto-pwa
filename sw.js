if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let o={};const f=e=>n(e,d),c={module:{uri:d},exports:o,require:f};i[d]=Promise.all(r.map((e=>c[e]||f(e)))).then((e=>(s(...e),o)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-7b090fda.js",revision:null},{url:"assets/index-d526a0c5.css",revision:null},{url:"index.html",revision:"2116fc8fe4acdba30d2c7cd4d268a8c7"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon-16x16.png",revision:"67c5a4f7728d954bde3d99d07df47cf7"},{url:"favicon-32x32.png",revision:"3637845f123d52bd939b2b76f6848fe6"},{url:"android-icon-144x144.png",revision:"7ba07b39a26dd96fb06dd97e7203b130"},{url:"android-chrome-192x192.png",revision:"ed5e39e4cef1af90f2d62b10762c6982"},{url:"android-chrome-512x512.png",revision:"996f918af6bc69bd0e8aa4f39518a049"},{url:"manifest.webmanifest",revision:"7a1e9f2fdf0405ec50112bea0420b93d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
