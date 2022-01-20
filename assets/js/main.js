const sliderOneSlideWithNav = new Swiper(".slider-1", {
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});

const sliderThreeSlideWithNav = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

const sliderFourSlideWithNav = new Swiper(".slider-4", {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});