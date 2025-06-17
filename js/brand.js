$(document).ready(function(){

  $(window).scroll(function() {
        if($(window).scrollTop() > 0) {
          $('.banner').addClass('act');
        } else {
          $('.banner').removeClass('act');

        }
		  });

});//끝