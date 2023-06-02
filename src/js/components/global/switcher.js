import $ from "jquery";

export default function switcherJs() {
  const container = $('.header__switcher');

  if (container) {
    const buttonSwitcher = container.find('.buttonCom');
    const body = $('.page__body');
    const svgLight = container.find('.icon-sunC');
    const svgDark = container.find('.icon-moonC');
    const twitterDark = $('.sectionHomeHero__frame--black');
    const twitterLight = $('.sectionHomeHero__frame--white');




    buttonSwitcher.on('click', function () {
      body.toggleClass('light-mode');
      body.toggleClass('dark-mode');
      svgLight.toggleClass('hidden');
      svgDark.toggleClass('hidden');
      twitterLight.toggleClass('hidden');
      twitterDark.toggleClass('hidden');

    })
  }
}
