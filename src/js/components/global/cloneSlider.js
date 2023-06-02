
export default function cloneSliderJs() {

  cloneJs('.sliderC-clients', '.sliderC-wrapper-clients', '.sliderC-wrapper-container', 5);
  cloneJs('.sliderC-people', '.sliderC-wrapper-people', '.sliderC-wrapper-container', 10);
  cloneJs('.sliderC-toolbox-1', '.sliderC-wrapper-toolbox-1', '.sliderC-wrapper-container', 5);
  cloneJs('.sliderC-toolbox-2', '.sliderC-wrapper-toolbox-2', '.sliderC-wrapper-container', 5);
  cloneJs('.sliderC-toolbox-3', '.sliderC-wrapper-toolbox-3', '.sliderC-wrapper-container', 5);
}

function cloneJs(mainContainer, containerInnerMain, containerCopyMain = '.sliderC-wrapper-container', countCloneNumber = 5) {

  const container = document.querySelector(mainContainer);

  if (container) {
    const containerInner = container.querySelector(containerInnerMain);
    const copyContainer = container.querySelector(containerCopyMain);


    console.log(container, containerInner, copyContainer)
    for (let i = 0; i <= countCloneNumber; i++) {
      const copyContainerClone = copyContainer.cloneNode(true);
      containerInner.appendChild(copyContainerClone);
    }



  }
}
