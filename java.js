$(document).ready(function(){
        $('.anime').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 1000,
            dots: true,
            infinite: true,
            slidesToShow: 2,
             slidesToScroll: 2,
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

        
        });

        $('#sary-engagement').slick({
            autoplay: true,
            autoplaySpeed: 1500,
            speed: 1000,
            dots: true,
            infinite: true,
            slidesToShow: 4,
             slidesToScroll: 1,

        
        });

AOS.init();
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
            $("#contactez").click(function (){
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
      })

        //ANIMATION PHONE APPLICATION
            $('#boutton2-p').click(function(){
                $(this).css('background-color', 'inherit')
                        .css('transition', '0.5s ease');
                $('#mobile').show('slow').fadeIn('slow');
                $('#mobile-titre').show('slow').fadeIn('slow');
                $('#web-titre').hide('slow').fadeOut('slow');
                $('#personalise-titre').hide('slow').fadeOut('slow');              
                $('#web').hide('slow').fadeOut('slow');
                $('#personalise').hide('slow').fadeOut('slow');
                $('#boutton1-p').css('background-color', '#10C0DC');
                $('#boutton3-p').css('background-color', '#10C0DC');              
            })


            $('#boutton1-p').click(function(){
                $(this).css('background-color', 'inherit')
                        .css('transition', '0.5s ease');
                $('#web').show('slow').fadeIn('slow');
                $('#web-titre').show('slow').fadeIn('slow');
                $('#mobile-titre').hide('slow').fadeOut('slow');
                $('#personalise-titre').hide('slow').fadeOut('slow');               
                $('#mobile').hide('slow').fadeOut('slow');
                $('#personalise').hide('slow').fadeOut('slow');
                $('#boutton2-p').css('background-color', '#10C0DC');
                $('#boutton3-p').css('background-color', '#10C0DC');
            })

            $('#boutton3-p').click(function(){
                $(this).css('background-color', 'inherit')
                        .css('transition', '0.5s ease');
                $('#personalise').show('slow').fadeIn('slow');
                $('#personalise-titre').show('slow').fadeIn('slow');
                $('#web-titre').hide('slow').fadeOut('slow');
                $('#mobile-titre').hide('slow').fadeOut('slow');
                $('#mobile').hide('slow').fadeOut('slow');
                $('#web').hide('slow').fadeOut('slow');
                $('#boutton1-p').css('background-color', '#10C0DC');
                $('#boutton2-p').css('background-color', '#10C0DC');
            })




})


