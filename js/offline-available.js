
function checkOnlineStatus() {
  if (navigator.onLine) console.log('internet-status: ONLINE ✅');
  else console.log('internet-status: OFFLINE 🚫 ');
}

window.addEventListener('online', checkOnlineStatus);
window.addEventListener('offline', checkOnlineStatus);
checkOnlineStatus();

// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./js/offline-service-worker.js')
    .then(() => console.log('Service Worker Registered'));
}