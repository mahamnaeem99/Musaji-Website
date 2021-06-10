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
  

$(function(){

    $('#show').on('click',function(){        
        $('.card-reveal').slideToggle('slow');
    });
    
    $('.card-reveal .close').on('click',function(){
        $('.card-reveal').slideToggle('slow');
    });
});

