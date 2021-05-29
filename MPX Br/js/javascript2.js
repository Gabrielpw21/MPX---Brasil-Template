$(document).ready(function(){

$('.carrossel').slick({
  slidesToShow:6,
  slidesToScroll: 6,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  infinite:true,
  speed: 2000,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),    
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }        
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
  breakpoint: 558,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1
      }    
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 320,
      setting:{
        slidesToShow:1,
        slidesToScroll:1,
      }
    }
    
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
  });
