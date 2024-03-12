const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 400,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@1.00": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.50": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
