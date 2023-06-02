import slidersJs from "./global/sliders";
import {horizontalScroll} from "./global/horizontalScroll";
import noScrollJs from "./global/noScroll";
import switcherJs from "./global/switcher";
import togglePeopleJs from "./global/togglePeople";
import logoAnimationJs from "./global/logoAnimation";
import faviconJs from "./global/favicon";
import cloneSliderJs from "./global/cloneSlider";
import hoverClientsJs from "./global/hoverClients";

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  cloneSliderJs();
  faviconJs();
  logoAnimationJs();
  switcherJs();
  slidersJs();
  horizontalScroll();
  noScrollJs();
  togglePeopleJs();
  hoverClientsJs();
});
