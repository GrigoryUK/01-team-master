import cloneSliderJs from "./global/cloneSlider"
import faviconJs from "./global/favicon"
import { horizontalScroll } from "./global/horizontalScroll"
import hoverAnimationJs from "./global/hoverAnimation"
import logoAnimationJs from "./global/logoAnimation"
import noScrollJs from "./global/noScroll"
import switcherJs from "./global/switcher"
import togglePeopleJs from "./global/togglePeople"

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  cloneSliderJs();
  faviconJs();
  logoAnimationJs();
  switcherJs();
  horizontalScroll();
  noScrollJs();
  togglePeopleJs();
  hoverAnimationJs();
});
