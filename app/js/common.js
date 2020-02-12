  $(document).ready(function(){
$('.carusel').slick({
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 6,
});
$('.carusel2').slick({
  dots: true,
  dotsClass: "my-dots"
});

});
