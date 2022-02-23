import Swiper, { Navigation, Pagination, Keyboard, Autoplay } from 'swiper';

/**
    Содержит в себе все события, прослушивания  и настройки, касающиеся слайдера Swiper.
    Аргументов на вход не принимает.
 */
export function swiper() {
    swiperTrainingBlock();
    swiperCommunityBlock();
} 

function swiperTrainingBlock() {
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
            onlyInViewport: true,
            pageUpDown: false,
        },
    
        watchOverflow: true,
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

}


function swiperCommunityBlock() {

}