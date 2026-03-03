self.addEventListener('install', e=>{
  e.waitUntil(
    caches.open('counter-v1').then(cache=>{
      return cache.addAll(['./','index.html']);
    })
  );
});