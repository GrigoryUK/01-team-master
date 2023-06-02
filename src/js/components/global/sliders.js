import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Scrollbar]);


export default function slidersJs() {
  const blockSliderClients = document.querySelectorAll('.blockSlider-clients');
  const blockSliderPeople = document.querySelectorAll('.blockSlider-people');

  if (blockSliderClients) {
    blockSliderClients.forEach(item => {
      const slider =  item.querySelector('.swiper-clients');


      const swiper = new Swiper(slider, {
        slidesPerView: 'auto',
        loop: true,


        breakpoints: {
          0: {
            spaceBetween: 80,
          },
          576: {
            spaceBetween: 100,
          },
          1442: {
            spaceBetween: 120,
          }
        },
      });
    })
  }

  if (blockSliderPeople) {
    blockSliderPeople.forEach(item => {
      const slider =  item.querySelector('.swiper-people');


      const swiper = new Swiper(slider, {
        slidesPerView: 'auto',
        loop: true,


        breakpoints: {
          0: {
            spaceBetween: 80,
          },
          576: {
            spaceBetween: 100,
          },
          1442: {
            // slidesPerView: 4,
            spaceBetween: 120,
          }
        },
      });
    })
  }

}
