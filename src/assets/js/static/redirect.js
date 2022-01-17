var lang = "en";
if (window.location.href.indexOf("://s.coronawarn.app") !== -1 || window.location.href.indexOf("://p.coronawarn.app") !== -1) {
  sessionStorage.setItem('originalUrl', window.location.href);
}
if (
  typeof navigator.languages !== "undefined" &&
  navigator.languages.length > 0
) {
  for (var i = 0; i < navigator.languages.length; ++i) {
    var tag = navigator.languages[i].slice(0, 2).toLowerCase();
    if (tag === "de" || tag === "en") {
      lang = tag;
      break;
    }
  }
} else if (
  (navigator.language || navigator.userLanguage).slice(0, 2).toLowerCase() ===
  "de"
) {
  lang = "de";
}

window.location.href = "./" + lang + "/";