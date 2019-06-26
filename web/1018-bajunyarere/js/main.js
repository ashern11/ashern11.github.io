$(document).ready(function() {
    "use strict";

    //------- Owl Carusel  js --------//  
    $('#product-carousel').owlCarousel({
		loop:true,
		margin:10,
        responsiveClass:true,
        nav:true,
        navText: [
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"
        ],
		responsive:{
			0:{
				items:1,

			},
			600:{
				items:3,
			},
			1000:{
				items:4,
                loop:true,
			}
		}
    });

    $('#instagram-carousel').owlCarousel({
		loop:true,
		margin:10,
        responsiveClass:true,
        navText: [
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"
        ],
		responsive:{
			0:{
				items:1,
                nav:true,
			},
			600:{
				items:1,
				nav:false
			},
			1000:{
				items:3,
				nav:true,
				loop:false
			}
		}
    });


    //------- Smooth Scroll  js --------//  
    $('.scrollify-link').on('click', function() {
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
        ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
            scrollTop: target.offset().top
            }, 2000, function() {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
                return false;
            } else {
                $target.attr('tabindex','-1');
                $target.focus();
                $('#btn').removeClass('active');
                $('#box').removeClass('active');
            };
            });
        }
        }
    });


    $('#btn').click(function(){
        if ($('#btn').hasClass('active')) {
            $('#btn').removeClass('active');
            $('#box').removeClass('active');
        }else{
            $('#btn').addClass('active');
            $('#box').addClass('active');
        }
	});
    
    
	window.addEventListener('keydown', function (event) {
        if ($('#box').hasClass('active') && event.keyCode === 27) {
            $('#btn').removeClass('active');
            $('#box').removeClass('active');
        }
    });


    $('.instagram').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: true,
                centerMode: true,
                slidesToShow: 1
              }
            }
          ]
    });

});