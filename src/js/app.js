"use strict"

import { elements } from './modules/elementsDOM.js';
import { isTouch } from './modules/isTouch.js';

import Swiper, { Navigation, Pagination, Keyboard, Autoplay} from 'swiper';

const swiperTraining = new Swiper('.swiper', {

    modules: [Navigation, Pagination, Keyboard, Autoplay],
    
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

swiperTrainingBlock.addEventListener('mouseenter', () => {
    swiperTraining.params.autoplay.disableOnInteraction = false;
    swiperTraining.params.autoplay.delay = 1000;
    swiperTraining.autoplay.start();
});

swiperTrainingBlock.addEventListener('mouseleave', () => {
    swiperTraining.autoplay.stop();
});


// ====================

const hrefSite = 'http://127.0.0.1:5500/src/';

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
    ev.preventDefault();
    let resultFromAreaText = prompt('Введите абзац статьи: ');

    if (resultFromAreaText.length >= 500) {
        resultFromAreaText = resultFromAreaText.slice(0, 497) + '...';
    }

    if(resultFromAreaText) {
        missionText.insertAdjacentHTML('beforeend', `<p>${resultFromAreaText}</p>`);
    } else {return;}
});

arrowButtonMission.addEventListener('click', ev => {
    ev.preventDefault();
    let resultFromAreaText = prompt('Введите абзац статьи: ');

    if(resultFromAreaText && missionText.children[missionText.children.length - 1].tagName === 'P') {
        missionText.children[missionText.children.length - 1].insertAdjacentHTML('beforeend', ` ${resultFromAreaText}`);
    } else {return;} 
});

// ====================

let headerMenu = document.querySelector('.menu');
let headerMenuLinks = document.querySelectorAll('.menu__link');
const isActiveLinkMenu = 'menu__link--active'; 

for(let i = 0; i < headerMenuLinks.length; i++) {
    const textInLink = headerMenuLinks[i].textContent.toLowerCase();
    headerMenuLinks[i].id = textInLink;
    headerMenuLinks[i].href = `#${headerMenuLinks[i].id}`;
};

const checkerMenuNavigation = () => {
    if(location.href === hrefSite || location.href === hrefSite + '#') {
        headerMenuLinks[0].classList.add(isActiveLinkMenu);
        return;
    } 
    const hashURL = `#${location.href.split('#')[1]}`;
    for(let i = 0; i < headerMenuLinks.length; i++) {
        if(hashURL === `#${headerMenuLinks[i].id}`) {
            headerMenuLinks[i].classList.add(isActiveLinkMenu);
            break;
        }
    };
    return;
};

checkerMenuNavigation();

// ====================

if(isTouch.any()) {
    document.body.classList.add('_Touch');
} else {
    document.body.classList.add('_Pc');
}

let slides = document.getElementsByClassName('swiper-slide');
console.log(slides);

let headerNavigation = {};

if(document.body.classList.contains('_Pc')) {
    for(let i = 0; i < headerMenuLinks.length; i++) {
        headerNavigation[`${headerMenuLinks[i].id}`] = {
                'id': `${headerMenuLinks[i].id}`,
                'href': `${headerMenuLinks[i].href}`,
                'body': headerMenuLinks[i],
                'tag': `${headerMenuLinks[i].tagName}`,
        };
        Object.freeze(headerNavigation[`${headerMenuLinks[i].id}`]);
    };
    Object.freeze(headerNavigation);
}

console.log(headerNavigation);

if (location.href === hrefSite + '#' + headerNavigation.workouts.id) {
    console.log('true');
} 

// ====================

const textFitnessWidth = textFitness.clientWidth;
const textFitnessHeight = textFitness.clientHeight;

console.log(textFitnessWidth);
console.log(textFitnessHeight);

// Кол-во прокрученный пикселей

const windowScrollTop = window.pageYOffset;
const windowScrollLeft = window.pageXOffset;

// console.log(windowScrollLeft);
// console.log(windowScrollTop);

const setScrollBy = () => {
    const windowScrollTop = window.pageYOffset;
    window.scrollBy(0, 100);
    console.log(windowScrollTop);
};

const setScrollTo = () => {
    window.scrollTo({
        top: 600,
        left: 0,
        // instant, auto
        behavior: 'smooth',
    });  
};

const setScrollIntoView = (Block) => {
    Block.scrollIntoView({
        block: 'center',
        inline: 'nearest',
        behavior: 'smooth',
    });
};

const regHeader = document.querySelectorAll('.buttons-header__button');

regHeader[0].addEventListener('click', ev => {
    ev.preventDefault();
    setScrollBy();
});

regHeader[0].addEventListener('dblclick', ev => {
    setScrollIntoView(titleFitness);
});

regHeader[1].addEventListener('click', ev => {
    ev.preventDefault();
    setScrollTo();
});

// --------------------

const textFitnessOffsetWidth = titleFitness.offsetWidth;
const textFitnessOffsetHeight = titleFitness.offsetHeight;

console.log(textFitnessOffsetWidth);
console.log(textFitnessOffsetHeight);

const xy = titleFitness.ariaColIndex;

