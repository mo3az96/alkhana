document.addEventListener("DOMContentLoaded", function () {
  lazyLoad();


  var mainSwiper = new Swiper(".main-slider>.swiper-container", {
    slidesPerView: 1,
    mousewheel: true,
    direction: "vertical",
    on: {
      init: function () {
        swipers();
      },
      slideChange: function (swiper) {
        check(swiper.activeIndex);
      },
    },
  });


  function swipers() {
    //////////** projects slider **//////////
    var projectswiper = new Swiper(".projects-slider .swiper-container", {
      loop: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1199: {
          slidesPerView: 3,
          spaceBetween: 45,
        },
      },
      pagination: {
        el: ".projects-slider .swiper-pagination",
        clickable: true,
      },
      on: {
        init: function (swiper) {
          lazyLoad();
        },
      },
    });
    //////////** partners slider **//////////
    var partnerswiper = new Swiper(".partners-slider .swiper-container", {
      loop: true,
      mousewheel: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 1,
        },
        1199: {
          slidesPerView: 1,
        },
      },
      pagination: {
        el: ".partners-slider .swiper-pagination",
        // clickable: true,
        type: "progressbar",
      },
      navigation: {
        nextEl: ".partners-slider .swiper-btn-next",
        prevEl: ".partners-slider .swiper-btn-prev",
      },
    });
  }
  
  function check(slideIndex) {
    document.getElementById("header").classList.add("fixed");
    var body = document.body;
    body.removeAttribute("class");
    body.classList.add("bg" + slideIndex);
    if (slideIndex == 0) {
      document.getElementById("header").classList.remove("fixed");
    }
  }
});


