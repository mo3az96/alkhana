$(window).on("load", function () {
  lazyLoad();
});
$(document).ready(function () {
  //////////** Page slider **//////////
  var mainSwiper = new Swiper(".main-slider>.swiper", {
    slidesPerView: 1,
    mousewheel: true,
    speed: 500,
    direction: "vertical",
    pagination: {
      el: ".main-slider>.main-swiper-pagination",
      clickable: true,
    },
    on: {
      init: function () {
        swipers();
      },
      slideChange: function (swiper) {
        bgCheck(swiper.activeIndex);
      },
    },
  });

  //////////** Fixed Header Links **//////////
  $(".nav-link").click(function (e) {
    var slideIndex = $(this).attr("data-htef");
    mainSwiper.slideTo(slideIndex, 500);
    bgCheck(slideIndex);
  });

  //////////** BaackGround Change **//////////
  function bgCheck(slideIndex) {
    $("#header").addClass("fixed");
    $("body").attr("class", "");
    $("body").attr("class", "bg" + slideIndex);

    if (slideIndex == 0) {
      $("#header").removeClass("fixed");
    }
    $(".nav-link")
      .not("[data-htef='" + slideIndex + "']")
      .removeClass("active");
    $("[data-htef='" + slideIndex + "'].nav-link").addClass("active");
  }

  //////////** Inner Sliders Init **//////////
  function swipers() {
    //////////** projects slider **//////////
    var projectswiper = new Swiper(".projects-slider .swiper", {
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
    var partnerswiper = new Swiper(".partners-slider .swiper", {
      loop: true,
      // mousewheel: true,
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
        type: "progressbar",
      },
      navigation: {
        nextEl: ".partners-slider .swiper-btn-next",
        prevEl: ".partners-slider .swiper-btn-prev",
      },
      // on: {
      //   slideNextTransitionStart: function (swiper) {
      //     if (swiper.isEnd) {
      //       mainSwiper.mousewheel.enable();
      //     }
      //   },
      // },
    });

    //////////** services slider **//////////
    if ($(window).width() <= 991) {
      $(".service-item").wrapAll('<div class="swiper-wrapper"></div>');
      $(".service-item").wrap('<div class="swiper-slide"></div>');
      $(".service-items").addClass("swiper").removeClass("service-items");
      var projectswiper = new Swiper(".services-slider .swiper", {
        breakpoints: {
          0: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          767: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        },
        pagination: {
          el: ".services-slider .swiper-pagination",
          clickable: true,
        },
        on: {
          init: function (swiper) {
            lazyLoad();
          },
        },
      });
    }
  }
});
