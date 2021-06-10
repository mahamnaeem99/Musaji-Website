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

  $(document).ready(function(){  
    $("#modal .modal-btn-close .close-btn").click(function(){
      $(".modal-main").fadeOut('slow').removeClass("opened");
    });  
    $(".btn-activate").click(function(){
      $(".modal-main").fadeToggle('slow').addClass("opened");
    });
  });