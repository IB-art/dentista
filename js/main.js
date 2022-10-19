$(function(){
  $('.action-slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.png" alt=""></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.png" alt=""></button>',
    dots: true,
    autoplay: true,
    // infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 872,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  });


  $('.doctors__name').slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.content',
    vertical: true
  });

  $('.content').slick({
    prevArrow: '<button type="button" class="content-left"><img src="images/arrow-left.png" alt=""></button>',
    nextArrow: '<button type="button" class="content-right"><img src="images/arrow-right.png" alt=""></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.doctors__name',
    fade: true,
    // arrows: false
  
  });

  $('.reviews__items').slick({
    prevArrow: '<button type="button" class="content-left"><img src="images/arrow-left.png" alt=""></button>',
    nextArrow: '<button type="button" class="content-right"><img src="images/arrow-right.png" alt=""></button>',
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 521,
        settings: {
          
          slidesToShow: 1,
          slidesToScroll: 1
          
        }
      }
    
    ]
  })

  $('.certificates__item').slick({
    prevArrow: '<button type="button" class="content-left"><img src="images/arrow-left.png" alt=""></button>',
    nextArrow: '<button type="button" class="content-right"><img src="images/arrow-right.png" alt=""></button>',
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 721,
        settings: {         
          slidesToShow: 3,
          slidesToScroll: 1     
        }
      },
      {
        breakpoint: 546,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }    
    ]
  })

  $('.clinic__items').slick({
    prevArrow: '<button type="button" class="content-left"><img src="images/arrow-left.png" alt=""></button>',
    nextArrow: '<button type="button" class="content-right"><img src="images/arrow-right.png" alt=""></button>',
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {         
          slidesToShow: 3,
          slidesToScroll: 1     
        }
      },
      {
        breakpoint: 771,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 501,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }    
    ]
  })

  $('.header__menu').on('click', function(){
    $('.header__hour').toggleClass('header__hour--active');
  });

  $('.header__menu').on('click', function(){
    $('.header__phone').toggleClass('header__phone--active');
  });

  $('.header__menu').on('click', function(){
    $('.header__address').toggleClass('header__address--active');
  });

  $('.header__menu').on('click', function(){
    $('.header__social ').toggleClass('header__social--active');
  });

  

 
    
  
  });


