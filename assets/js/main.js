const sliderOneSlideWithNav = new Swiper(".slider-1", {
  spaceBetween: 20,
  pagination: {
    el: ".slider-1 .swiper-pagination",
    clickable: true,
  },
  navigation: {
      nextEl: ".slider-1 .swiper-button-next",
      prevEl: ".slider-1 .swiper-button-prev",
  },
});

const sliderOneSlideWithNavFade = new Swiper(".slider-1-fadein", {
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  spaceBetween: 20,
  pagination: {
    el: ".slider-1-fadein .swiper-pagination",
    type: "fraction",
    clickable: true,
  },
  navigation: {
      nextEl: ".slider-1-fadein .swiper-button-next",
      prevEl: ".slider-1-fadein .swiper-button-prev",
  },
});

const sliderThreeSlideOnDesktopWithNav = new Swiper(".slider-1-on-mobile-3-on-desktop", {
  spaceBetween: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".slider-1-on-mobile-3-on-desktop .swiper-button-next",
    prevEl: ".slider-1-on-mobile-3-on-desktop .swiper-button-prev",
  },
  pagination: {
    el: ".slider-1-on-mobile-3-on-desktop .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    993: {
      slidesPerView: 3,
    }
  }
});

const sliderFourSlideWithNav = new Swiper(".slider-4", {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
      nextEl: ".slider-4 .swiper-button-next",
      prevEl: ".slider-4 .swiper-button-prev",
  },
});