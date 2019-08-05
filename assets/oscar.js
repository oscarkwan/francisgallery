$(window).on('load', function() {
  if ($(window).width() > 600) {
     var images = $('.product-images-section img');

     for ( var i = 0; i < images.length; i++ ) {
         if (images[i].width > images[i].height) {
           $(images[i]).closest("div").addClass('slide-landscape');
         } else {
           $(images[i]).closest("div").addClass('slide-portrait');
         }
     };
  }

  ScrollReveal().reveal('.page-container div', { duration: 1000, delay: 250 });
});

$(document).ready(function($) {
  $("#scrollDown").click(function() {
    $('html, body').animate({
        scrollTop: $(".main-content").offset().top
    }, 1000);
  });

  if($(window).width() >= 750) {
    $('.main-content-sticky').css("margin-bottom", $('.footer-sticky').height());
    $('.footer-sticky').css('opacity', '0');
  }

  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    loading: false
  });

  $('.animsition').on('animsition.outEnd', function(){
    $('.footer-sticky').css('opacity', '1');
  });

  $('.animsition').on('animsition.inEnd', function(){
    $('.footer-sticky').css('opacity', '1');
  })

  if($(window).width() >= 1025) {
    if ($ ( ".product-description-bottom").length ) {
      var waypoint = new Waypoint({
        element: $('.product-description-bottom'),
        handler: function(direction) {
          if(direction === 'down') {
            console.log("enter");
            $(".product-description-top").unstick();
            $(".product-description-section").addClass("product-description-flex-end");
          } else {
            console.log("leave");
            $(".product-description-top").sticky({topSpacing: 65});
            $(".product-description-section").removeClass("product-description-flex-end");
          }
        },
        offset: function() {
          console.log($(".product-description-top").height() + 75);
          return ($(".product-description-top").height() + 75);
        }
      })
    }
  }

  if($(window).width() >= 750) {
    if ( $( ".template-About #shopify-section-footer" ).length ) {
      var waypoint = new Waypoint({
        element: $('.template-About #shopify-section-footer'),
        handler: function(direction) {
          if(direction === 'down') {
            $('.page-artist-left').addClass('no-more-sticky');
            $('.page-artist-right').addClass('margin-left-43');
            $('.page-artist-left').unstick();
          } else {
            $('.page-artist-left').removeClass('no-more-sticky');
            $('.page-artist-right').removeClass('margin-left-43');
            $('.page-artist-left').sticky();
          }
        },
        offset: '100%'
      })
    }
  }

  if($(window).width() >= 750) {
    if ( $( "#shop-artwork" ).length ) {
      var waypoint = new Waypoint({
        element: $('#shop-artwork'),
        handler: function(direction) {
          if(direction === 'down') {
            $('.page-artist-left').addClass('no-more-sticky');
            $('.page-artist-right').addClass('margin-left-43');
            $('.page-artist-left').unstick();
          } else {
            $('.page-artist-left').removeClass('no-more-sticky');
            $('.page-artist-right').removeClass('margin-left-43');
            $('.page-artist-left').sticky();
          }
        },
        offset: '100%'
      })
    }
  }

  if($(window).width() >= 750) {
    if ( $( "#shop-artwork" ).length ) {
      var waypoint = new Waypoint({
        element: $('#shop-artwork'),
        handler: function(direction) {
          if(direction === 'down') {
            $('.francis-logo-right h1').addClass('color-white');
          } else {
            $('.francis-logo-right h1').removeClass('color-white');
          }
        },
        offset: '50%'
      })
    }
  }

  if($(window).width() >= 750) {

    if ( $( "#shopify-section-header" ).length ) {
      var waypoint = new Waypoint({
        element: $('#shopify-section-header'),
        handler: function(direction) {
          if(direction === 'down') {
            $('.francis-logo-right h1').addClass('color-white');
          } else {
            $('.francis-logo-right h1').removeClass('color-white');
          }
        },
        offset: '50%'
      })
    }

    if ( $( "#PageContainer" ).length ) {
      var waypoint = new Waypoint({
        element: $('#PageContainer'),
        handler: function(direction) {
          if(direction === 'down') {
            $('.francis-logo-right h1').removeClass('color-white');
          } else {
            $('.francis-logo-right h1').addClass('color-white');
          }
        },
        offset: '50%'
      })
    }

    if ( $( "#homepage-featured-collection" ).length ) {
      var waypoint = new Waypoint({
        element: $('#homepage-featured-collection'),
        handler: function(direction) {
          if(direction === 'down') {
            $('.francis-logo-right h1').addClass('color-white');
          } else {
            $('.francis-logo-right h1').removeClass('color-white');
          }
        },
        offset: '50%'
      })
    }

    if ( $( ".contact-page" ).length ) {
      var waypoint = new Waypoint({
        element: $('.contact-page'),
        handler: function(direction) {
          if(direction === 'down') {
            console.log("enter");
            $(".contact-page .page-artist-left").unstick();
            $(".contact-page .page-artist-right").removeClass('margin-left-43');
          } else {
            console.log("leave");
            $(".contact-page .page-artist-left").sticky();
            $(".contact-page .page-artist-right").addClass('margin-left-43');
          }
        },
        offset: 'bottom-in-view'
      })
    }
  }

  $('#textScroll').scroll(function(){
    var textDiff = $('#text').height() - $('#textScroll').height();
    console.log('textdiff' + textDiff);
    var textDiffRatio = (1 / textDiff) * $('#textScroll').scrollTop();
    console.log('textdiffratio' + textDiffRatio);
    var photosDiff = $('#photos').height() - $('#photosScroll').height();
    console.log('photosDiff' + photosDiff);
    var photosScrollTop = textDiffRatio * photosDiff;
    console.log('photosscrolltop' + photosScrollTop);
    $('#photosScroll').scrollTop(photosScrollTop);
  });


  if($(window).width() >= 750) {
    $(window).scroll( function(){
      if($(window).scrollTop() > 100) {
        $('.menu-ham-nav').addClass('expand');
      } else {
        $('.menu-ham-nav').removeClass('expand');
        $('.site-header__logo-menu').removeClass('logo-opacity');
      }
    });
  }

  $(window).scroll( function(){
    if($(window).scrollTop() > 350) {
      $('.homepage-header-right').addClass('opacity-0');
      $('.homepage-scroll-down').addClass('opacity-0');
    } else {
      $('.homepage-header-right').removeClass('opacity-0');
      $('.homepage-scroll-down').removeClass('opacity-0');
    }
  });

  $('#accordion').find('.accordion-toggle').click(function(){
    var textToggle = $(this).text();
    $(this).text(textToggle === 'Read details +' ? 'Read details -' : 'Read details +');
    //Expand or collapse this panel
    $(this).prev().slideToggle();
    //Hide the other panels
    $(".accordion-content").not($(this).prev()).slideUp('fast');
  });

  $('#accordion-product').find('.accordion-toggle').click(function(){
    //Expand or collapse this panel
    $(this).next().slideToggle();
    //Hide the other panels
    $(".accordion-content").not($(this).next()).slideUp('fast');
  });

  $('.menu-ham').on('click', function() {
    $('.site-header__logo-hamburger #nav-icon3').toggleClass('open');
    $('.menu-ham-nav').toggleClass('expand');
    $('.site-header__logo-menu p').toggleClass('logo-opacity');
  });

  $('.filter-artist-nav').on('click', function() {
    $('body').removeClass('modal-open');
    $('.filter-artist-nav').fadeToggle({start: function() {
      $(this).css({
        display: "flex"
      });
    }});
    if($(window).width() >= 750) {
      $(".site-header__logo-menu").fadeToggle();
    }
    $('.search-by-artist').removeClass('top-48');
  });

  $('.filter-category-nav').on('click', function() {
    $('body').removeClass('modal-open');
    $('.filter-category-nav').fadeToggle({start: function() {
      $(this).css({
        display: "flex"
      });
    }});
    if($(window).width() >= 750) {
      $(".site-header__logo-menu").fadeToggle();
    }
    $('.search-by-artist').removeClass('top-48');
  });

  $('#browser-by-artist').click(function() {
    $('body').addClass('modal-open');
    // $(this).text($(this).text() == 'Browse by Artist' ? 'Close' : 'Browse by Artist');
    // if($(this).text() == 'Browse by Artist') {
    //   $(this).removeClass('search-by-noob');
    // } else {
    //   $(this).addClass('search-by-noob');
    // }
    // $('.search-by-artist').toggleClass('top-48');
    $('.filter-artist-nav').fadeToggle({start: function() {
      $(this).css({
        display: "flex"
      });
    }});
    // $(".mobile-nav-trigger").fadeToggle();
    if($(window).width() >= 750) {
      $(".site-header__logo-menu").fadeToggle();
    }
  });

  $('#browser-by-category').click(function() {
    $('body').addClass('modal-open');
    $('.filter-category-nav').fadeToggle({start: function() {
      $(this).css({
        display: "flex"
      });
    }});
    // $(".mobile-nav-trigger").fadeToggle();
    if($(window).width() >= 750) {
      $(".site-header__logo-menu").fadeToggle();
    }
  });

  if($(window).width() >= 750) {
    $(".contact-page .page-artist-right").addClass('margin-left-43');
    $(".contact-page .page-artist-left").sticky();
    $('.page-artist-content .page-artist-left').sticky();
    $('.product-description-top').sticky({topSpacing:65});
  }

  $('.francis-logo-right a').attr("href" ,"/");

  $('.mobile-nav-trigger').click(function() {
    $(this).toggle();
    $('.menu-ham-nav').toggleClass('expand');
    // var yolo = $(".menu-ham-nav").height();
    $('.francis-logo-right').toggleClass('show-logo');
    // $('.francis-logo-right').css("top", `${yolo}px`);
  })

  if($(window).width() < 750) {
    $('.francis-logo-right a').removeAttr("href");
    $('.francis-logo-right a').on('click', function() {
      $('.francis-logo-right').toggleClass('show-logo');
      $('.menu-ham-nav').removeClass('expand');
      $('.mobile-nav-trigger').show();
    });

    $('.menu-ham').on('click', function() {
      $('.francis-logo-right').toggleClass('show-logo');
    });
  }
});
