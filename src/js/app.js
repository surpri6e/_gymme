"use strict";

const swiperTraining = new Swiper('.swiper', {
    
    navigation: {
        prevEl: '.swiper-nav__prev-el',
        nextEl: '.swiper-nav__next-el',
    },

    simulateTouch: true,
    touchRatio: 1.5,
    touchAngle: 50,
    grabCursor: true,
    speed: 600,

    keyboard: {
        enabled: true,
        onlyInVieport: true,
        pageUpDown: false,
    },

    watchOveflow: true,
    spaceBetween: 40,
    loop: true,

    // slidesPerGroup: 1,
    //centeredSlides: true,
    // initialSlide: 1,

    breakpoints: {
        400: {
            slidesPerView: 1,
        },
        800: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 2,
        }
    },

});

let swiperTrainingBlock = document.querySelector('.training__slider');

swiperTrainingBlock.addEventListener('click', ev => {
    if(ev.target.closest('.swiper-image > img')) {
        ev.target.alt = 'Watched image';
    } else {return;}
});

swiperTrainingBlock.addEventListener('mouseenter', () => {
    swiperTraining.params.autoplay.disableOnInteraction = false;
    swiperTraining.params.autoplay.delay = 1000;
    swiperTraining.autoplay.start();
});

swiperTrainingBlock.addEventListener('mouseleave', () => {
    swiperTraining.autoplay.stop();
});

// ====================

let buttonsFitness = document.querySelector('.buttons-fitness');
let mainButtonFitness = document.querySelector('.buttons-fitness__button');
let titleFitness = document.querySelector('.fitness__title');
let textFitness = document.querySelector('.fitness__text');

buttonsFitness.addEventListener('dblclick', ev => {
    const randomColor = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;  
    };

    if(ev.target.closest('.btn')) {
        const newElement = document.createElement('a');
        const textInNewButton = prompt('Введите имя новой кнопки:');
        if(textInNewButton === null || textInNewButton === '') {
            newElement.textContent = `Main`;
        } else {
            newElement.textContent = textInNewButton;
        };
        newElement.classList.add('btn', 'buttons-fitness__button');
        newElement.style.backgroundColor = `#${randomColor(1, 999999)}`;
        newElement.style.cursor = 'pointer';

        buttonsFitness.insertAdjacentElement('beforeend', newElement);
    } else {
        return;
    }
});

// ====================

let mainButtonMission = document.querySelector('.buttons-mission__button');
let arrowButtonMission = document.querySelector('.buttons-mission > span');
let missionText = document.querySelector('.mission__text');

mainButtonMission.addEventListener('click', ev => {
    let resultFromAreaText = prompt('Введите абзац статьи: ');
    ev.preventDefault();
    if (resultFromAreaText.length >= 500) {
        resultFromAreaText = resultFromAreaText.slice(0, 497) + '...';
    }
    if(resultFromAreaText) {
        missionText.insertAdjacentHTML('beforeend', `<p>${resultFromAreaText}</p>`);
    } else {return;}
});

arrowButtonMission.addEventListener('click', ev => {
    let resultFromAreaText = prompt('Введите абзац статьи: ');
    ev.preventDefault();
    // Эту кнопку сделать с доп. заголовком
    if(resultFromAreaText) {
        missionText.insertAdjacentHTML('beforeend', `<p">${resultFromAreaText}</p>`);
    } else {return;} 
});
