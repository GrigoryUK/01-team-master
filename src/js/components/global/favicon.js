import {isDesktop} from "../../functions/check-viewport";


export default function faviconJs() {
  if (isDesktop()) {
    const link = document.querySelector('.favicon-link');
    const arrHref = ['favicon-1.ico', 'favicon-2.ico', 'favicon-3.ico', 'favicon-4.ico'];
    next();

    function next() {
      let i = 0;
      let timerId = setInterval(function () {
        link.href = arrHref[i];
        i++;
        if (i >= arrHref.length) {
          i = 0;
          clearInterval(timerId);
          next()
        }
      }, 1000);
    }
  }
}
