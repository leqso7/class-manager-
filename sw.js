if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const l=e=>i(e,o),d={module:{uri:o},exports:t,require:l};s[o]=Promise.all(n.map((e=>d[e]||l(e)))).then((e=>(r(...e),t)))}}define(["./workbox-e3490c72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"0bb034419e76875c319d8b669ec0da81"},{url:"assets/browser-CTmPpaWd.js",revision:null},{url:"assets/index-D-Xodb0M.css",revision:null},{url:"assets/index-k1UNd6PM.js",revision:null},{url:"index.html",revision:"02e516da332d513579762b81bfa61531"},{url:"manifest.webmanifest",revision:"60fa77a8c0854d8565d6430c3e5c37fb"},{url:"pwa-192x192.png",revision:"37d797d802ec35eb08bb8a00ea272600"},{url:"pwa-512x512.png",revision:"1f5893634f785195f2d866a8080757a7"},{url:"registerSW.js",revision:"bd57fd9ab175ef520807e29b8979bc2f"},{url:"pwa-192x192.png",revision:"37d797d802ec35eb08bb8a00ea272600"},{url:"pwa-512x512.png",revision:"1f5893634f785195f2d866a8080757a7"},{url:"manifest.webmanifest",revision:"60fa77a8c0854d8565d6430c3e5c37fb"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));