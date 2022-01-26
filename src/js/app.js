console.log("app.js");

const swiperTraining = new Swiper('.swiper', {
    
    navigation: {
        prevEl: '.swiper-nav__prev-el',
        nextEl: '.swiper-nav__next-el',
    },

    hideOnClick: true,

    simulateTouch: true,
    touchRatio: 1.5,
    touchAngle: 50,
    grabCursor: true,

    keyboard: {
        enabled: true,
        onlyInVieport: true,
        pageUpDown: false,
    },

    watchOveflow: true,

    slidesPerView: 2,
    slidesPerGroup: 1,

    spaceBetween: 40,

    centeredSlides: true,

    initialSlide: 1,

    loop: true,

    speed: 600,

    breakpoints: {
        400: {
            slidesPerView: 1,
        },
        800: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
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