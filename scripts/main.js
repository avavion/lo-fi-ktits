// Слайдер

function initSlider(sliderClass, slidesToShow, slidesToSlick) {
  $(sliderClass).slick({
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToSlick,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
  });
}

window.addEventListener("load", () => {
  initSlider(".quote-slider", 1, 1);
});
