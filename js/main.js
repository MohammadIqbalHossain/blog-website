$(".owl-carousel").owlCarousel({
    items : 1, // THIS IS IMPORTANT
    responsive : {
          320 : { items : 1  }, // from zero to 320 screen width 1 items
          560 : { items : 2  }, // from 320 screen widthto 560 1 items
          960 : { items : 3   // from 560 screen width to 960 3 items
          }
      },
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    dots:false,
    nav:true,
    navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')]
   
});







$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');
    


    /* click event on toggle menu */

    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');

    })
//  owl-carousel for blog 
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    dots:false,
    nav:true,
    navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')]
   
});

// click to scroll up--
$('.move-up span').click(function(){
    $('html,body').animate({
      scrollTop:0  
    },1000);

});
//AOS instance
AOS.init();

});