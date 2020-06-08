/*glopal $, alert, console*/

$(function(){
    'use strict';
    /** slick slider**/
    $('.autoplay').slick({
        lazyLoad: 'ondemand',
        slidesToScroll: 1,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 7000,
        dots: false,
        infinite: true,  

        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow:4 
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow:3 
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2
                }
            }
        ]

      });

      /*buttom-top*/ 
        var scrollButton = $("#button-top");
        $(window).scroll(function(){
            if ( $(this).scrollTop() >= 800){
                scrollButton.show();
            }
            else{
                scrollButton.hide();   
            }
        });
        
        scrollButton.click(function(){
            $("html, body").animate({ scrollTop: 0}, 1500);
        });
    
    
});