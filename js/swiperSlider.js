document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1150: {
        slidesPerView: 3,
      },
      700: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });
});
