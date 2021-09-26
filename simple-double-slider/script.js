document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    const slider = document.querySelector('#slider');
    const secondaryList = document.querySelector('.secondary__list');
    const mainList = document.querySelector('.main__list');
    const downBtn = document.querySelector('.down-btn');
    const upBtn = document.querySelector('.up-btn');

    const slidesTotalCount = mainList.children.length;
    const slideHeight = slider.clientHeight;
    let activeSlideIndex = 0;


    mainList.style.top = `-${(slidesTotalCount - 1) * slideHeight}px`;

    downBtn.addEventListener('click', () => {
        changeSlide('down');
    })

    upBtn.addEventListener('click', () => {
        changeSlide('up');
    })


    function changeSlide(direction) {
        if (direction === 'down') {
            
            activeSlideIndex++;
            if (activeSlideIndex === slidesTotalCount) {
                activeSlideIndex = 0;
            }
        } else if (direction === 'up') {
            
            activeSlideIndex--;
            if (activeSlideIndex < 0) {
                activeSlideIndex = slidesTotalCount -1;
            }
        }

        secondaryList.style.transform = `translateY(-${activeSlideIndex * slideHeight}px)`;
        mainList.style.transform = `translateY(${activeSlideIndex * slideHeight}px)`;
    }
 
})