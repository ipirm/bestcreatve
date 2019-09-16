"use strict";

var portfolioMainSlider = new Swiper('.portfolio-main-slider', {
  allowTouchMove: false,
  loop: true,
  effect: 'fade',
  slidesPerView: 1,
  navigation: {
    prevEl: '.portfolio-slider-button-prev',
    nextEl: '.portfolio-slider-button-next'
  }
});
var portfolioBigImageSlider = new Swiper('.portfolio-big-image-slider .swiper-container', {
  allowTouchMove: false,
  loop: true,
  effect: 'fade',
  slidesPerView: 1
});
var portfolioSmallImageSlider = new Swiper('.portfolio-small-image-slider .swiper-container', {
  allowTouchMove: false,
  loop: true,
  effect: 'fade',
  slidesPerView: 1
});
portfolioMainSlider.controller.control = portfolioBigImageSlider;
portfolioBigImageSlider.controller.control = portfolioSmallImageSlider;