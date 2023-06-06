import $ from "jquery"
import { isDesktop, isMobile, isTablet } from "../../functions/check-viewport"
import { gsap } from '../../vendor/gsap.min'

export default function logoAnimationJs() {
  const logo = $(".header__logo--button");
  if (logo) {
    const icon = logo.find("svg");
    const link = logo.find("a");

    if (isDesktop()) {
      const tl = gsap.timeline({});
      logo
        .on("mouseenter", function () {
          tl.to(icon, { xPercent: -110, duration: 0.6 })
            .to(link, { visibility: "visible", duration: 0.3 })
            .to(link, { opacity: 1, duration: 0.3 });
        })
        .on("mouseleave", function () {
          tl.to(link, { opacity: 0, duration: 0.3 })
            .to(link, { visibility: "hidden", duration: 0.3 })
            .to(icon, { xPercent: -1, duration: 0.3 });
        });
    }

    if (isTablet() || isMobile()) {
      logo.on("click", function () {
        tl.to(icon, { xPercent: -110, duration: 0.3 })
          .to(link, { visibility: "visible", duration: 0.3 })
          .to(link, { opacity: 1, duration: 0.3 });
      });
    }
  }
}
