// Show online/offline status
const status = document.getElementById('status');

function updateStatus() {
  if (navigator.onLine) {
    status.textContent = "You are ONLINE ✅";
  } else {
    status.textContent = "You are OFFLINE 🚫 (but app still works)";
  }
}

window.addEventListener('online', updateStatus);
window.addEventListener('offline', updateStatus);
updateStatus();

// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('Service Worker Registered'));
}