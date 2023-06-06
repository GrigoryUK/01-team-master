import $ from 'jquery'
import { isDesktop, isMobile, isTablet } from "../../functions/check-viewport"
import { gsap } from '../../vendor/gsap.min'

export default function hoverAnimationJs() {
  const container = $(".blockSlider-clients");
  const containerTwo = $(".sliderC-partners");
  hoverRotate(containerTwo, '.sliderC-slide', '.sliderC__animation');
  hoverRotate(container, '.itemCom', '.itemCom__animation');

  function hoverRotate(containerCom, itemCom, animCom, number = 10, rotateNum = +360) {
    if (containerCom) {
      const item = containerCom.find(itemCom);

      if (isDesktop()) {
        item
          .on("mouseenter", function () {
            const tl = new gsap.timeline({})
            const anim = $(this).find(animCom);
            tl.to(anim, {rotationY: rotateNum, duration: number})
              .to(anim, {rotationY:0, duration: 0})
          })
      }

      if (isTablet() || isMobile()) {
        item
          .on("click", function () {
            $(this).toggleClass('active');
          })
      }

    }
  }


}
