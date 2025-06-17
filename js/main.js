$(document).ready(function(){

  AOS.init();

//찜목록
$(".wish-icon-fill").hide();

$(".wish-icon").click(function(){
  const $parent = $(this).closest(".product-img");
  $parent.find(".wish-icon").hide();
  $parent.find(".wish-icon-fill").show();
});

$(".wish-icon-fill").click(function(){
  const $parent = $(this).closest(".product-img");
  $parent.find(".wish-icon-fill").hide();
  $parent.find(".wish-icon").show();
});


//데스크탑 서브메뉴
$("header .depth2").hide();
$("header .nav_1-wrap").hide();
// $("header .gnb > li").hover(function(){
//   $("header .depth2").stop().fadeToggle();
//   $("header .nav_1-wrap").stop().fadeToggle();
// });

$("header .gnb > li").mouseenter(function(){
  $("header .depth2").stop().fadeIn();
  $("header .nav_1-wrap").stop().fadeIn();
});

$("header .gnb > li").mouseleave(function(){
  $("header .depth2").stop().fadeOut();
  $("header .nav_1-wrap").stop().fadeOut();
});


//모바일 서브메뉴
$(".mobile-menu .depth2").hide();
$(".mobile-menu .gnb > li > a").click(function(e) {
  e.preventDefault(); // 링크 이동 방지

  const $depth2 = $(this).next(".depth2");

  // 열려있는 다른 메뉴 닫기 (선택 사항)
  $(".mobile-menu .depth2").not($depth2).slideUp();

  // 현재 클릭된 메뉴만 토글
  $depth2.slideToggle();
});

//모바일 메뉴창 열기
$(".ham").click(function(){
  $(".mobile-menu").animate({"left" : "0px"},500,"swing");
});
//모바일 메뉴창 닫기
$(".mobile-menu .close").click(function(){
  $(".mobile-menu").animate({"left" : "-200%"},500,"swing");
});


//검색창
$(".search").hide();
$(".search-icon").click(function(){
  $(".search").fadeIn();
});

$(".search .close").click(function(){
  $(".search").fadeOut();
});


//팝업 애니메이션
    $(window).on('scroll', function(){
      const popup = $('.popup');
      const triggerPoint = $(window).scrollTop() + $(window).height();
      const popupOffset = popup.offset().top;

      if (triggerPoint > popupOffset + 100) {
        popup.addClass('active');
      }
    });

//top버튼
  
    const topBtn = document.querySelector('.top');

    topBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    });

    //category-slide
const category_slide = new Swiper('.category-slide', {

  slidesPerView: 3.5, 
  spaceBetween: 30,
  watchSlidesProgress: true,
  
});
  //아코디언 메뉴
const categorySlides = document.querySelectorAll('.category-slide .swiper-slide');

categorySlides.forEach(slide => {
  slide.addEventListener('mouseenter', () => {
    categorySlides.forEach(s => s.style.width = '350px');
    slide.style.width = '450px';
  });

  slide.addEventListener('mouseleave', () => {
    categorySlides.forEach(s => s.style.width = '');
    category_slide.update(); // 중요: 레이아웃 다시 계산
  });
});





  
//main-slide
const main_banner = new Swiper('.main-banner', {

   loop: true,

   autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 2000, 

   pagination: {
    el: ".swiper-pagination", 
    type: "bullets", 
    clickable: true,
  },

    effect: "fade", 
  fadeEffect: {
    crossFade: true, 
  },

});

//event-slide
const event_slide = new Swiper('.event-slide', {

   autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
   loop: true,

   direction: "vertical", 

   spaceBetween: 30,


  speed: 2000, 

    breakpoints: { // 반응형 슬라이드

    1024: {
      // 1024px 이상
      spaceBetween: 10,

    },
  },


});

//best-slide
const best_slide = new Swiper('.best-slide', {
  speed: 2000, 

  slidesPerView: 1.6, 
  spaceBetween: 32,


  breakpoints: { 
    1000: {
      slidesPerView: 2.5, 
        spaceBetween: 32,
      
    },
    1400: {
      
        slidesPerView: 3.5, 
        spaceBetween: 32,
    },
  },

  scrollbar: {
      el: ".swiper-scrollbar",
      hide: false, 
      dragSize: 800,
      draggable: true, 
          },

});





});//끝
