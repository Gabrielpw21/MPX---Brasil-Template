
$('.galeria').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,  
  slidesToScroll: 3,
  arrows: true,
  prevArrow: $('.prev2'),
  nextArrow: $('.next2'),
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
  ]
});

