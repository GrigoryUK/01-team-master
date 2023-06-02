import $ from 'jquery';
import {isDesktop, isMobile, isTablet} from "../../functions/check-viewport";
import {gsap} from "gsap";

export default function hoverClientsJs() {
  const container = $(".blockSlider-clients");
  if (container) {
    const item = container.find('.itemCom');


    if (isDesktop()) {
      item
        .on("mouseenter", function () {
          $(this).addClass('active');

        })
        .on("mouseleave", function () {
          setTimeout(() => {
            $(this).removeClass('active');
          }, 10000)
        });
    }

    if (isTablet() || isMobile()) {
      item
        .on("click", function () {


        })
    }

  }


}
