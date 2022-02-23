"use strict"

import * as ts from './modules/ts.js';
import { swiper } from './modules/swiper.js';

swiper();
ts.mainDocumentSettings();

// ====================

// const textFitnessWidth = textFitness.clientWidth;
// const textFitnessHeight = textFitness.clientHeight;

// console.log(textFitnessWidth);
// console.log(textFitnessHeight);

// // Кол-во прокрученный пикселей

// const windowScrollTop = window.pageYOffset;
// const windowScrollLeft = window.pageXOffset;

// // console.log(windowScrollLeft);
// // console.log(windowScrollTop);

// const setScrollBy = () => {
//     const windowScrollTop = window.pageYOffset;
//     window.scrollBy(0, 100);
//     console.log(windowScrollTop);
// };

// const setScrollTo = () => {
//     window.scrollTo({
//         top: 600,
//         left: 0,
//         // instant, auto
//         behavior: 'smooth',
//     });  
// };

// const setScrollIntoView = (Block) => {
//     Block.scrollIntoView({
//         block: 'center',
//         inline: 'nearest',
//         behavior: 'smooth',
//     });
// };

// const regHeader = document.querySelectorAll('.buttons-header__button');

// regHeader[0].addEventListener('click', ev => {
//     ev.preventDefault();
//     setScrollBy();
// });

// regHeader[0].addEventListener('dblclick', ev => {
//     setScrollIntoView(titleFitness);
// });

// regHeader[1].addEventListener('click', ev => {
//     ev.preventDefault();
//     setScrollTo();
// });

// // --------------------

// const textFitnessOffsetWidth = titleFitness.offsetWidth;
// const textFitnessOffsetHeight = titleFitness.offsetHeight;

// console.log(textFitnessOffsetWidth);
// console.log(textFitnessOffsetHeight);

// const xy = titleFitness.ariaColIndex;


