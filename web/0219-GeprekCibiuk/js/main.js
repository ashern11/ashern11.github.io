$(document).ready(function() {
    $('a[href*=\\#]').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $(this.hash).offset().top
        }, 500);
    });
});

$('.collapsible').click(function(){
  $(this).text()=="See All" ? $(this).text("Hide All") : $(this).text("See All");
  $('.collapse').slideToggle('slow');
});

var images = new Array('konten1-0.jpg','konten1-1.jpg');
var slider = setInterval(function() {
  $(".konten1").css("background-image", "url(../img/"+images[0]+")");
  images.splice(images.length, 0, images[0]);
  images.splice(0, 1);
}, 3000);

AOS.init();
var konfigurasi = {
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

$('.slick-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
});
$('.slick-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){$(".konten2").css("background-image", "url(img/konten2-"+nextSlide+".jpg)");});


$('.slick-menu').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  centerMode: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
});

$('.tentang-kami').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
});
$('.tentang-kami').on('beforeChange', function(event, slick, currentSlide, nextSlide){$(".konten-tentang").css("background-image", "url(img/about-"+nextSlide+".png)");});


$('.slick-instagram').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });

// var feed = new Instafeed({
//     get: 'user',
//     userId: 'ashern11',
//     resolution: 'standard_resolution',
//     template: '<div><a href="{{link}}"><img src="{{image}}" /></a></div>',
//     after: function () {
//       $('.slick-instagram').slick({
//         dots: true,
//         infinite: true,
//         speed: 300,
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         centerMode: true,
//         responsive: [
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//               infinite: true,
//               dots: true
//             }
//           }
//         ]
//       });
//     }
// });
