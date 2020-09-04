$(document).ready(function(){

  var siteCarousel = function () {
    if ( $('.nonloop-block-13').length > 0 ) {
      $('.nonloop-block-13').owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 0,
        autoplay: true,
        smartSpeed: 800,
        nav: true,
        navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
        responsive:{
          600:{
            margin: 0,
            nav: true,
            items: 2
          },
          1000:{
            margin: 0,
            stagePadding: 0,
            nav: true,
            items: 3
          },
          1200:{
            margin: 0,
            stagePadding: 0,
            nav: true,
            items: 4
          }
        }
      });
    }


    if ( $('.nonloop-block-14').length > 0 ) {
      $('.nonloop-block-14').owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 0,
        autoplay: true,
        smartSpeed: 800,
        nav: true,
        navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
        responsive:{
          600:{
            margin: 20,
            nav: true,
            items: 2
          },
          1000:{
            margin: 30,
            stagePadding: 0,
            nav: true,
            items: 3
          },
          1200:{
            margin: 30,
            stagePadding: 0,
            nav: true,
            items: 4
          }
        }
      });
    }

    $('.slide-one-item').owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 0,
      autoplay: true,
      pauseOnHover: false,
      nav: true,
      navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
    });

    $('.slide-one-item-alt').owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 0,
      smartSpeed: 1000,
      autoplay: true,
      pauseOnHover: true,
      onDragged: function(event) {
        console.log('event : ',event.relatedTarget['_drag']['direction'])
        if ( event.relatedTarget['_drag']['direction'] == 'left') {
          $('.slide-one-item-alt-text').trigger('next.owl.carousel');
        } else {
          $('.slide-one-item-alt-text').trigger('prev.owl.carousel');
        }
      }
    });
    $('.slide-one-item-alt-text').owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 0,
      smartSpeed: 1000,
      autoplay: true,
      pauseOnHover: true,
      onDragged: function(event) {
        console.log('event : ',event.relatedTarget['_drag']['direction'])
        if ( event.relatedTarget['_drag']['direction'] == 'left') {
          $('.slide-one-item-alt').trigger('next.owl.carousel');
        } else {
          $('.slide-one-item-alt').trigger('prev.owl.carousel');
        }
      }
    });

    


    $('.custom-next').click(function(e) {
      e.preventDefault();
      $('.slide-one-item-alt').trigger('next.owl.carousel');
      $('.slide-one-item-alt-text').trigger('next.owl.carousel');
    });
    $('.custom-prev').click(function(e) {
      e.preventDefault();
      $('.slide-one-item-alt').trigger('prev.owl.carousel');
      $('.slide-one-item-alt-text').trigger('prev.owl.carousel');
    });

    


  };
  siteCarousel();
    
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

            $("#contactez-nous").click(function (){
                $('html, body').animate({
                    scrollTop: $("#contenu-contact").offset().top
                }, 1500);
            }); 
            $("#bouttontout a").click(function (){
                $('html, body').animate({
                    scrollTop: $("#porfolio").offset().top
                }, 500);
            });
            $("#contactez-maintenant").click(function (){
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


