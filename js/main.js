$(window).on("load", function () {
  lazyLoad();
  numbers();
});

$(document).ready(function () {
  new bootstrap.ScrollSpy(document.body, {
    target: "#fixedNavbar",
  });

  $("#fixedNavbar ul li a[href^='#']").on("click", function (e) {
    e.preventDefault();
    var hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      500,
      function () {
        window.location.hash = hash;
      }
    );
    if ($(window).width() <= 767) {
      $(".menu-btn").trigger("click");
    }
  });

  const scrollContainer = document.querySelectorAll(".partners-overflow")[0];
  const leftBtn = document.getElementById("scroll-left");
  const rightBtn = document.getElementById("scroll-right");
  scrollContainer.addEventListener("wheel", (e) => {
    var prev = 1;
    scrollContainer.scrollLeft -= e.deltaY;
    prev = scrollContainer.scrollLeft;

    if (
      !(
        (scrollContainer.scrollLeft && prev) == 0 ||
        scrollContainer.scrollWidth + prev == 1140
      )
    ) {
      e.preventDefault();
    }
  });
  leftBtn.addEventListener("click", (e) => {
    scrollContainer.scrollLeft -= 100;
  });
  rightBtn.addEventListener("click", (e) => {
    scrollContainer.scrollLeft += 100;
  });

  if ($(this).scrollTop() >= 10) {
    $("header").addClass("header-scroll");
  } else {
    $("header").removeClass("header-scroll");
  }
  $(window).scroll(function () {
    numbers();
    if ($(this).scrollTop() >= 10) {
      $("header").addClass("header-scroll");
    } else {
      $("header").removeClass("header-scroll");
    }
  });

  $(".menu-btn").on("click", function (e) {
    $(this).toggleClass("active");
    $(".logo").toggleClass("active");
    $(".navbar").slideToggle();
    $("body").toggleClass("overflow");
  });
});

jQuery(function ($) {
  $(window)
    .scroll(function () {
      // selectors
      var $window = $(window),
        $body = $("body"),
        $panel = $("section");

      // Change 33% earlier than scroll position so colour is there when you arrive.
      if ($(window).width() <= 767) {
        var scroll = $window.scrollTop() + $window.height() / 10;
      } else {
        var scroll = $window.scrollTop() + $window.height() / 3;
      }
      $panel.each(function () {
        var $this = $(this);

        if (
          $this.position().top <= scroll &&
          $this.position().top + $this.height() > scroll
        ) {
          $body.removeClass(function (index, css) {
            return (css.match(/(^|\s)color-\S+/g) || []).join(" ");
          });

          $body.addClass("color-" + $(this).data("color"));
        }
      });
    })
    .scroll();
});

var a = 0;
function numbers() {
  if (a === 0 && $(this).scrollTop() >= $(".about-section").offset().top) {
    $(".number-desc .number").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 1000,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
    a = 1;
  }
}
