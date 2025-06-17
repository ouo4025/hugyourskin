$(document).ready(function(){

  $(window).scroll(function() {
        if($(window).scrollTop() > 0) {
          $('.collection-banner').addClass('act');
        } else {
          $('.collection-banner').removeClass('act');

        }
		  });

});//끝