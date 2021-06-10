$("#news-slider8").owlCarousel({
    items : 3,
    itemsDesktop:[1199,3],
    itemsDesktopSmall:[980,2],
    itemsMobile : [600,1],
    autoPlay:true
});

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