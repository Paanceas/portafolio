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
  } else {
    window.location.replace(url);
  }
}

function callPostMessageA(msn) {
    window.toggleMessageHandler.postMessage(JSON.stringify({
      type:'REDIRECT',
      device: 'android',
      url: msn
    }))
}

function callPostMessageB(msn) {
    window.webkit.messageHandlers.toggleMessageHandler.postMessage(JSON.stringify({
      type:'REDIRECT',
      device: 'ios',
      url: msn
    }))
}