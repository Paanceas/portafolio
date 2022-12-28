function openClick() {
  let url =
    "https://segurosdaviplata.cardif.com.co/web/app-seguros-personas/tus-seguros-2";
  if (
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i)
  ) {
    url = "https://apps.apple.com/co/app/safari/id1146562112"
  } else if (navigator.userAgent.match(/Android/i)) {
    url = "https://play.google.com/store/apps/details?id=com.android.chrome&hl=es_CO&gl=US"
  }
  window.location.replace(url);
}
