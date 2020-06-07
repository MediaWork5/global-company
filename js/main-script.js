/*glopal $, alert, console*/

$(function(){
    'use strict';
    /********* body ******/
    var span1 = $("nav > .container > .row > div:first-child > span:nth-of-type(1)")
    var span2 = $("nav > .container > .row > div:first-child > span:nth-of-type(2)")
    $(span2).on("click", function(){
        $("body, #button-top, nav, .list-perfume, .list-product").toggleClass("light-mode no");
    });
    $(span1).on("click", function(){
        $("body, #button-top, nav, .list-perfume, .list-product").toggleClass("light-mode no");
    });



    /****** nav ******/
    $("nav > .container > .row > div:nth-child(3) > div").on("click", function(){

        var menu_div = $("nav > .container > .row > div:nth-child(2)");
        if($(menu_div).css("display") == "none") {
            $("nav > .container > .row > div:nth-child(3) > div:hover > span:nth-child(2)").animate({
                left: 0
            },300);
            menu_div.show(300);
        }
        else {
            menu_div.hide(300);
            $("nav > .container > .row > div:nth-child(3) > div:hover > span:nth-child(2)").animate({
                left: -4
            },300);
        }
    })
    $(window).resize(function(){
        var sw = $(window).innerWidth();
        if(sw > 750) {
            $("nav > .container > .row > div:nth-child(2)").show();
        }
        else {
            $("nav > .container > .row > div:nth-child(2)").hide();
        }
    });

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
                breakpoint: 991,
                settings: {
                    slidesToShow: 5
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