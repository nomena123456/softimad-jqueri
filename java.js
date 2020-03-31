$(document).ready(function(){
        $('.anime').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1200,
            dots: true,
            infinite: true,
            slidesToShow: 1,
             slidesToScroll: 1,
             nextArrow:false,
             prevArrow:false,
        
        });
        $('#img-contenu').slick({
            autoplay: true,
            autoplaySpeed: 1500,
            speed: 1000,
            dots: true,
            infinite: true,
            slidesToShow: 4,
             slidesToScroll: 1,
             responsive: [
                {
                  breakpoint: 1000,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                  }

                },
                {
                  breakpoint: 720,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                  }
                  
                },
                {
                  breakpoint: 460,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                  }
                  
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]

        
        });

        $('#sary-engagement').slick({
            autoplay: true,
            autoplaySpeed: 1500,
            speed: 1000,
            dots: true,
            infinite: true,
            slidesToShow: 4,
             slidesToScroll: 1,
             responsive: [
                {
                  breakpoint: 1000,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,

                  }
                },
                {
                  breakpoint: 720,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                  }
                  
                },
                {
                  breakpoint: 460,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                  }
                  
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]

        
        });

        $('.contenu-anime-p').slick({
            autoplay: true,
            autoplaySpeed: 1500,
            speed: 1000,
            dots: true,
            infinite: true,
        });

        //MENU FONCTION


            $("#m2").click(function (){
                $('html, body').animate({
                    scrollTop: $("#service").offset().top
                }, 500);
            });
            $("#m1").click(function (){
                $('html, body').animate({
                    scrollTop: $("#menu").offset().top
                }, 500);
            });
            $("#m3").click(function (){
                $('html, body').animate({
                    scrollTop: $("#porfolio").offset().top
                }, 500);
            });
            $("#m4").click(function (){
                $('html, body').animate({
                    scrollTop: $("#qui-sommes-nous").offset().top
                }, 500);
            });
            $("#m5").click(function (){
                $('html, body').animate({
                    scrollTop: $("#nos-engagement").offset().top
                }, 500);
            });
             $("#m6").click(function (){
                $('html, body').animate({
                    scrollTop: $("#contact").offset().top
                }, 500);
            });
//ANIMATION BOUTTON RETRA2

            $(".soratra a").click(function (){
                $('html, body').animate({
                    scrollTop: $("#contenu-contact").offset().top
                }, 1500);
            }); 
            $("#bouttontout a").click(function (){
                $('html, body').animate({
                    scrollTop: $("#porfolio").offset().top
                }, 500);
            });
            $("#soratra-engagement a").click(function (){
                $('html, body').animate({
                    scrollTop: $("#contenu-contact").offset().top
                }, 500);
            });
//ANIMATION AMIN OHONE



           $("#m2-p").click(function (){
                $('html, body').animate({
                    scrollTop: $("#service").offset().top
                }, 500);
                $('#menu-phone').hide('slow').fadeOut('slow');
            });
            $("#m1-p").click(function (){
                $('html, body').animate({
                    scrollTop: $("#menu").offset().top
                }, 500);
                $('#menu-phone').hide('slow').fadeOut('slow');
            });
            $("#m3-p").click(function (){
                $('html, body').animate({
                    scrollTop: $("#porfolio").offset().top
                }, 500);
                $('#menu-phone').hide('slow').fadeOut('slow');
            });
            $("#m4-p").click(function (){
                $('html, body').animate({
                    scrollTop: $("#qui-sommes-nous").offset().top
                }, 500);
                $('#menu-phone').hide('slow').fadeOut('slow');
            });
            $("#m5-p").click(function (){
                $('html, body').animate({
                    scrollTop: $("#nos-engagement").offset().top
                }, 500);
                $('#menu-phone').hide('slow').fadeOut('slow');
            });
             $("#m6-p").click(function (){
                $('html, body').animate({
                    scrollTop: $("#contact").offset().top
                }, 500);
                $('#menu-phone').hide('slow').fadeOut('slow');
            });
         
//ANIMATION


      $('#barre-menu').click(function(){
        $('#menu-phone').show('slow').fadeIn('slow');
        $('#menu-phone').css('display', 'flex');
      })
      $('#croi').click(function(){
        $('#menu-phone').hide('slow').fadeOut('slow');
      });



$(window).bind('scroll', function () 
      {
        if ($(window).scrollTop() > 60) 
        {
          $('#headermenu').addClass('fixed');
          $('.menumenu').addClass('menumenuu');
          //$('.page-header').addClass('hide-header');
        } 
        else 
        {
          $('#headermenu').removeClass('fixed');
          $('.menumenu').removeClass('menumenuu');
          //$('.page-header').removeClass('hide-header');
        }
      });


})


