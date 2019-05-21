$(function () {
  "use strict";

  // fixed menu
  var menuOffset = $(".customnav").offset().top;

  $(window).on('scroll', function () {
    var windowScroll = $(window).scrollTop();

    if (windowScroll > menuOffset) {
      $(".customnav").addClass('customNav_fixed_top');
    } else {
      $(".customnav").removeClass('customNav_fixed_top');
    }
  });

  // banner slider 
  $('#banner').slick({
    arrows: false,
    fade: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  });
});