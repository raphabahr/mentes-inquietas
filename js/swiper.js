const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        720: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        1480: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }
});