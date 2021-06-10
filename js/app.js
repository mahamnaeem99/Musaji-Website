function checkScroll(){
  var startY = $('.navbar').height() * 0; //The point where the navbar changes in px

  if($(window).scrollTop() > startY){
      $('.navbar').addClass("scrolled");
  }else{
      $('.navbar').removeClass("scrolled");
  }
}

if($('.navbar').length > 0){
  $(window).on("scroll load resize", function(){
      checkScroll();
  });
}



$('.OwlCarousel1').owlCarousel({
  loop:true,
  margin:10,
  dots:false,
  nav:true,
  autoplay:true,   
  smartSpeed: 3000, 
  autoplayTimeout:3000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})

    // SLIDER

    jQuery(document).ready(function($) {
        $('.slider').slick({
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 500,
          arrows: false,
          responsive: [{
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
               arrows: false,
               slidesToShow: 1,
               slidesToScroll: 1
            }
          },
          {
             breakpoint: 400,
             settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
             }
          }]
      });
  });

  $('.multiCarousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 6
      }
    }
  })




  var nav = document.querySelector('nav');

      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 0) {
          nav.classList.add('bg-light', 'shadow');
        } else {
          nav.classList.remove('bg-light', 'shadow');
        }
      });