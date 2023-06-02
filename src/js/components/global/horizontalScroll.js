import {isDesktop} from "../../functions/check-viewport";


export function horizontalScroll() {


  if (isDesktop()) {
    const sliderClients = document.querySelector('.sliderC-wrapper-clients');
    const sliderPeople = document.querySelector('.sliderC-wrapper-people');
    const sliderToolbox = document.querySelectorAll('.sliderC-wrapper-toolbox');

    if (sliderClients) {
      scrollFun(sliderClients);
    }

    if (sliderPeople) {
      scrollFun(sliderPeople);
    }

    if (sliderToolbox) {
      sliderToolbox.forEach(item => {
        scrollFun(item);
      })
    }
  }



}

function scrollFun(item) {
  const slider = item;
  let mouseDown = false;
  let startX, scrollLeft;

  let startDragging = function (e) {
    mouseDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };
  let stopDragging = function (event) {
    mouseDown = false;
  };

  slider.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if(!mouseDown) { return; }
    const x = e.pageX - slider.offsetLeft;
    const scroll = x - startX;
    slider.scrollLeft = scrollLeft - scroll;
  });

// Add the event listeners
  slider.addEventListener('mousedown', startDragging, false);
  slider.addEventListener('mouseup', stopDragging, false);
  slider.addEventListener('mouseleave', stopDragging, false);
}
