$(window).on("load", function () {
  lazyLoad();
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
    if ($(this).scrollTop() >= 10) {
      $("header").addClass("header-scroll");
    } else {
      $("header").removeClass("header-scroll");
    }
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
      var scroll = $window.scrollTop() + $window.height() / 3;

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
