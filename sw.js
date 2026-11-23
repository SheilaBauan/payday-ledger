/* Payday Ledger offline cache. Change CACHE when you want every device to refetch the files. */
var CACHE='payday-ledger-v6';
var SHELL=['./','./index.html','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png','./icon-maskable-512.png','./apple-touch-icon.png'];

self.addEventListener('install',function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(SHELL);}).then(function(){return self.skipWaiting();}));
});
self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){return k!==CACHE;}).map(function(k){return caches.delete(k);}));
  }).then(function(){return self.clients.claim();}));
});
self.addEventListener('fetch',function(e){
  var r=e.request;
  if(r.method!=='GET')return;
  var u=new URL(r.url);
  if(!(u.origin===location.origin||u.hostname==='fonts.googleapis.com'||u.hostname==='fonts.gstatic.com'))return;
  e.respondWith((async function(){
    var cache=await caches.open(CACHE);
    var hit=await cache.match(r,{ignoreSearch:true});
    var net=fetch(r).then(function(res){
      if(res&&(res.status===200||res.type==='opaque'))cache.put(r,res.clone());
      return res;
    });
    if(hit){e.waitUntil(net.catch(function(){}));return hit;}
    try{return await net;}
    catch(err){
      if(r.mode==='navigate'){var shell=await cache.match('./index.html');if(shell)return shell;}
      throw err;
    }
  })());
});
