(function () {
  if (window.customCssByDenisLock) return;
  window.customCssByDenisLock = true;

  const style = document.createElement("style");
  document.head.appendChild(style);

  chrome.runtime.onMessage.addListener(function (msg) {
    if (msg.type === "your-css-changed") {
      style.innerHTML = msg.css;
    }
  });
})();
