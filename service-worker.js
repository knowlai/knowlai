"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","9d4467cd7c8a5d1efb53ed377d92e8a4"],["/static/css/main.92a960a2.css","94e5de938c924c0597a07b1105f3783f"],["/static/js/main.6f36db78.js","b5cea1ad37e413b84088f9491f42257f"],["/static/media/Roboto-Black.893fe146.ttf","893fe14628bd7ac498d550e96367e1be"],["/static/media/Roboto-BlackItalic.256aab65.ttf","256aab654d3c4dd0e12fd0a32c7e8aa6"],["/static/media/Roboto-Bold.d329cc8b.ttf","d329cc8b34667f114a95422aaad1b063"],["/static/media/Roboto-BoldItalic.b37d0bb7.ttf","b37d0bb73a2f688ecaee01647f41e3e5"],["/static/media/Roboto-Italic.de74c609.ttf","de74c60991cd63c8b922e0e665a39c7a"],["/static/media/Roboto-Light.7b5fb88f.ttf","7b5fb88f12bec8143f00e21bc3222124"],["/static/media/Roboto-LightItalic.129c5057.ttf","129c5057f4480f9a353e15e1e1e09f9d"],["/static/media/Roboto-Medium.fe13e417.ttf","fe13e4170719c2fc586501e777bde143"],["/static/media/Roboto-MediumItalic.5b25afa8.ttf","5b25afa871e1b896011859f8cdf8da74"],["/static/media/Roboto-Regular.ac3f799d.ttf","ac3f799d5bbaf5196fab15ab8de8431c"],["/static/media/Roboto-Thin.3f68500b.ttf","3f68500b267c20051088bcc0698af773"],["/static/media/Roboto-ThinItalic.1e5737be.ttf","1e5737be5c68c15c3a105b2db9a3b67c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});