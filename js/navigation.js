$(document).on('ready', function(){

  $('.hamburger-button').click(function(){
      $(this).parent().toggleClass('-active');
      $('body').toggleClass('scroll-block');
  });


});

