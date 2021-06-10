function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px
  
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

  
// Slick Slider
$('.slider').slick({
  arrows:false,
      infinite:true,
      slidesToShow:4,
      accessibility:true,
      autoplay:true,
      autoplaySpeed:2000,
  prevArrow:"<span class='arrow prev'><i class='fas fa-angle-left'></i></span>",
  nextArrow:"<span class='arrow next'><i class='fas fa-angle-right'></i></span>",
  customPaging : function(slider, i) {
     /* ADDING CUSTOM PAGING
      Example
      return  return '<li>Something you want to insert</li>';
*/
  },
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});