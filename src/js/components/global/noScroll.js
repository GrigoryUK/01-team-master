import $ from "jquery"
import { ScrollTrigger } from "../../vendor/ScrollTrigger.min"
import { gsap } from '../../vendor/gsap.min'
export default function noScrollJs() {
  const container = $('.sectionHomeNoScroll');
  gsap.registerPlugin(ScrollTrigger);
  if (container) {
    const textOne = container.find('.text-1');
    const textTwo = container.find('.text-2');
    const textThree = container.find('.text-3');
    const textFour = container.find('.text-4');
    const textFive = container.find('.text-5');
    const triggerOne = container.find('.triggerCom--1');
    const triggerTwo = container.find('.triggerCom--2');
    const triggerThree = container.find('.triggerCom--3');
    const triggerFour = container.find('.triggerCom--4');
    const triggerFive = container.find('.triggerCom--5');
    scrollFun(triggerOne, textOne, textTwo);
    scrollFun(triggerTwo, textTwo, textThree);
    scrollFun(triggerThree, textThree, textFour);
    scrollFun(triggerFour, textFour, textFive);
    scrollFunLast(triggerFive, textFive);
    function scrollFun(trigger, itemOne, itemTwo) {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: "center center",
          // markers: true,
          end: "center center",
          scrub: true,

        },
      });

      tl.to(itemOne, 1, {opacity: 0, duration: 1})
        .to(itemTwo, 1, {opacity: 1, duration: 1})

      tl.progress(0)
    }

    function scrollFunLast(trigger, item) {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: "center center",
          // markers: true,
          end: "center center",
          scrub: true,

        },
      });

      tl.to(item, 1, {opacity: 0})

      tl.progress(0)
    }
  }
}
