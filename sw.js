self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => {});
self.addEventListener('fetch', (e) => {}); // 하이패스 통과 (통신 방해 금지)