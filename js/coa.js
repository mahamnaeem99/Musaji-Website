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


$('input').on('focusin', function() {
    $(this).parent().find('label').addClass('active');
  });
  
  $('input').on('focusout', function() {
    if (!this.value) {
      $(this).parent().find('label').removeClass('active');
    }
  });