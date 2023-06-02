import $ from "jquery";

export default function togglePeopleJs() {
  const container = $('.sliderC-wrapper-people');

  if (container) {
    const sliders = container.find('.sliderC-slide');

    sliders.on('click', function(e) {
      const imageFront = $(this).find('.itemCom__animation--front');
      const imageBack = $(this).find('.itemCom__animation--back');

      imageFront.toggleClass('rotate');
      imageBack.toggleClass('rotate');
    })
  }
}
