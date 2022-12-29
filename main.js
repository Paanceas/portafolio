function openClick() {
  let url =
    "https://segurosdaviplata.cardif.com.co/web/app-seguros-personas/tus-seguros-2";
  if (
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i)
  ) {
    callPostMessageB(url);
  } else if (navigator.userAgent.match(/Android/i)) {
    callPostMessageA(url);
  }
  window.location.replace(url);
}

function callPostMessageA(msn) {
    window.toggleMessageHandler.postMessage("test android " + msn)
}

function callPostMessageB(msn) {
    window.webkit.messageHandlers.toggleMessageHandler.postMessage("test iphone " + msn)
}