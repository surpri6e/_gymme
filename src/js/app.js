"use strict"

import * as ts from './modules/ts.js';
import { isTouch } from './modules/isTouch.js';

import Swiper, { Navigation, Pagination, Keyboard, Autoplay} from 'swiper';


// import { event } from './test.js';
// event();

// import * as Type from './test.js';

// console.log(Type.contact3);

// Object.prototype.fine = () => console.log('I\'m fine');
// import { obj } from './object.js';


// console.log(obj.isValid());
// // obj.files = './src';
// // console.log(obj.isValid());
// // obj.name = '';
// // console.log(obj.isValid());

// const json = {
//     name: 'daniel',
//     age: 15,
// }

// const str = JSON.stringify(json, null, '  ');

// console.log(~str);

// const jsonClone = JSON.parse(JSON.stringify(json));

// console.log(jsonClone);
// console.log(jsonClone === json);

// const str = JSON.stringify(json)
// const parjson = JSON.stringify(pjson)

// console.log(str);
// console.log(typeof str);


// const clone = JSON.parse(str)

// console.log(clone);
// console.log(clone.name);
// console.log(clone === json);
// console.log(typeof clone);
// // parjson.

// import { User } from './cb.js';


// console.log(User);

// import { fetchTodos } from './cb.js';

const sleep = ms => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms)
    })
}


const urlAPI = `https://jsonplaceholder.typicode.com/todos` 

// async function fetchTodos() {
//     console.log('Fetching is started');
//     return sleep(2000)
//         .then(() => fetch(urlAPI).then(res => res.json()))
// }

// fetchTodos()
//     .then(data => {
//         console.log("Data: ", data);
//     })
//     .catch(function (err) {
//         console.error(err);
//     });

async function fetchAsyncTodos() {
    try {
        console.log('Fetching is started');
        await sleep(1000);
        const res = await fetch(urlAPI);
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    } finally {
        console.log('Finally');
    }
}

fetchAsyncTodos();



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

// if (location.href === hrefSite + '#' + headerNavigation.workouts.id) {
//     console.log('true');
// } 

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

// if(document.body.classList.contains('_Touch')) {
//     throw new Error(`Error has been found
//         at TypeScriptInt(['native code']): string; This is function doesn't return number types
//         at GenericFloamous<IFred>['class name'].age; Invalid record 

//         ==========
//     `)
// }

// const ob = Object.create(Object);

// console.log(ob);
// console.log(Object.prototype);

// ====================


// Object.prototype.name = 5656;

// let array = [1, 2, 3, 4, 5];

// Array.prototype.newM = function(N) {
//     return this.map((el) => {
//         return el * N; 
//     });
// }

// console.log(array.newM(4));
// console.log(array.name);

// array.__proto__.clear = function() {
//     array = [];
// }

// console.log(array);
// console.log(array.clear());
// console.log(array);

// let arr1 = [4, 5, 6, 7,]

// console.log(arr1);
// arr1.clear();
// console.log(arr1);


// function increm(n1) {
//     return function(n2) {
//         return function(n3) {
//             return function(n4) {
//                 console.log(n1 + n2 + n3 + n4)
//             }
//         }
//     }
// }

// const p1 = increm(1)(2)(3)

// p1(5)

function logPerson() {
    console.log(`Person:  ${this.name}, ${this.age}, ${this.job}`);
}

function bind(person, logger) {
    return logger.call(person)
}


const person1 = {
    name: 'Daniel',
    age: 54, 
    job: 'JavaScript',
}

const person2 = {
    name: 'Dima',
    age: 12, 
    job: 'HTML',
}

// bind(person1, logPerson);
// bind(person2, logPerson);


// const persons = Object.create(person1);

