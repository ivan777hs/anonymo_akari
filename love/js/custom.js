/* ======== index ========
1. PRELOADER
2. SCROLL TO
3. NAVBAR
4. ALL DROPDOWN ON HOVER
5. OWL CAROSEL
6. SWIPER SLIDER
7. CIRCLE PROGRESS
8. VIDEOBOX
9. SELECT BOX
10. TIMER
11. COUNTER-UP
12. MAP
13. ANIMATION
14. ISOTOP
15. INSTAFEED
===================== */

(function($) {
  'use strict';

  /*======== 1. PRELOADER ========*/
  

  /*======== 2. SCROLL TO ========*/
	$(document).ready(function () {
		$('.scrolling  a[href*="#"], .scrolling .btn-scroll-down').on('click', function (e) {
			e.preventDefault();
			e.stopPropagation();
			var target = $(this).attr('href');
			if ($(window).width() < 767) {
			  $(target).velocity('scroll', {
					duration: 800,
					offset: -70,
					easing: 'easeOutExpo',
					mobileHA: false
				});
			} else if($(window).width() >= 768) {
				$(target).velocity('scroll', {
					duration: 800,
					offset: -84,
					easing: 'easeOutExpo',
					mobileHA: false
				});
			}
		});
	});

  /*======== 3. NAVBAR ========*/

  $(window).on('load', function(){

    var header_area = $('.header');
    var main_area = header_area.find('.navbar');
    var zero = 0;
    var navbarSticky = $('.navbar-sticky');

    $(window).scroll(function(){
      var st = $(this).scrollTop();
      if (st > zero){
        navbarSticky.addClass('navbar-scrollUp');
      } else {
         navbarSticky.removeClass('navbar-scrollUp');
      }
      zero = st;

      if(main_area.hasClass('navbar-sticky') && ( $(this).scrollTop() <= 400 || $(this).width() <= 300)){
        main_area.removeClass('navbar-sticky').appendTo(header_area);
        header_area.css('height', 'auto');
      }else if( !main_area.hasClass('navbar-sticky') && $(this).width() > 300 && $(this).scrollTop() > 400 ){
        header_area.css('height', header_area.height());
        main_area.addClass('navbar-scrollUp');
        main_area.css({'opacity': '0'}).addClass('navbar-sticky');
        main_area.appendTo($('body')).animate({'opacity': 1});
      }
    });

    $(window).trigger('resize');
    $(window).trigger('scroll');

    // Form Search
    (function(b, c, d, e) {
      $(b).on('click', function() {
        $(e).addClass('search-visible'), setTimeout(function() {
          $(e + ' > input').focus();
        }, 200);
      }), $(c).on('click', function() {
        $(e).removeClass('search-visible');
      }), $(d).on('click', function() {
        $(e + ' > input').val(''), setTimeout(function() {
          $(e + ' > input').focus();
        }, 200);
      });
    }('.toolbar .tools .search', '.close-search', '.clear-search', '.site-search'));
  });

  /*======== 4. ALL DROPDOWN ON HOVER ========*/
  if($('.navbar').width() > 768){
    $('.navbar-nav .dropdown').hover(function() {
      $(this).add($(this).children('.dropdown-menu')).addClass('show');
    },
    function() {
      $(this).add($(this).children('.dropdown-menu')).removeClass('show');
    });
  }

  /*======== 5. OWL CAROSEL ========*/
  //Banner Slider
  $('#banner-carousel').owlCarousel({
    margin:0,
    loop:true,
    autoplay: true,
    dots: false,
    autoplayTimeout: 5000,
    items: 1,
    smartSpeed:450,
    animateOut: 'fadeOut',
    touchDrag: false,
    mouseDrag: false
  });

  //Blog Slider
  $('#blog-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    nav:true,
    navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    dots: false,
    responsiveClass: true,
    items:1
  });

  //Brand Slider
  $('#brands').owlCarousel({
    loop:true,
    margin: 100,
    autoplay: true,
    autoplayTimeout: 3000,
    nav:false,
    dots: true,
    responsiveClass: true,
    center: true,
    responsive:{
      0:{
        margin: 20,
        items:3,
        dots: false
      },
      768:{
        items:3
      },
      992:{
        items:5
      }
    }
  });

  //Social-media Slider
  $('#social-media').owlCarousel({
    margin:0,
    loop:true,
    autoplay: true,
    dots: false,
    nav:true,
    navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    autoplayTimeout: 6000,
    items: 1,
    animateIn: 'fadeIn'
  });

  //Testimonial Slider
  $('#testimonial').owlCarousel({
    margin:0,
    loop:true,
    autoplay: false,
    dots: true,
    autoplayTimeout: 6000,
    items: 1,
    responsiveClass:true,
    responsive:{
      0:{
        dots:false
      },
      768:{
        dots:true
      }

    }
  });

  //Groom-Bride Slider
  $('#groom-bride-realative').owlCarousel({
    margin:20,
    loop:true,
    autoplay: true,
    dots: true,
    autoplayTimeout: 6000,
    items: 4,
    responsiveClass:true,
    responsive:{
      0:{
        dots:false,
        items: 1
      },
      768:{
        dots:true,
        items: 2
      },
      992:{
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });

  $('#bridesmaids, #groomsmens').owlCarousel({
    margin:20,
    loop:true,
    autoplay: true,
    dots: false,
    autoplayTimeout: 6000,
    items: 4,
    responsiveClass:true,
    responsive:{
      0:{
        items: 1
      },
      768:{
        items: 2
      },
      992:{
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });

  /*======== 6. SWIPER SLIDER ========*/
  var swiper = new Swiper('#swiper', {
    loop: true,
    autoplay: false,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 30,
      stretch: 30,
      depth: -30,
      modifier: 1,
      slideShadows : true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
          1024: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 3,
            coverflowEffect: {
              stretch: -15,
              depth: -55
            }

          },
          767: {
            slidesPerView: 1
          }
        }
  });

  /*======== 7. CIRCLE PROGRESS ========*/
  var el = $('.circle1'),
  inited = false;

  el.appear({ force_process: true });

  el.on('appear', function() {
    if (!inited) {
      el.circleProgress({
        size : 150
      });
      inited = true;
    }
  });

  /*======== 8. VIDEOBOX ========*/
  var videoBox = $('.video-box i');
  videoBox.on('click', function(){
    var video = '<iframe class="embed-responsive-item"  allowfullscreen src="'+ $(this).attr('data-video') +'"></iframe>';
    $(this).replaceWith(video);
  });

  /*======== 9. SELECT BOX ========*/
  $('.select-drop').selectbox();

  /*======== 10. TIMER ========*/
  $('.simple_timer').syotimer({
    year: 2018,
    month: 5,
    day: 9,
    hour: 20,
    minute: 30
  });

  /*======== 11. COUNTER-UP ========*/

  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });

  /*======== 12. MAP ========*/
  function initialize() {
    var myLatLng = {lat: 40.6094957, lng: -73.7300059};
    var mapOptions = {
      zoom: 14,
      scrollwheel: false,
      center: new google.maps.LatLng(40.6094957, -73.7300059)
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var image = 'img/marker.png';
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon : image
    });
  }
  var mapId = $('#map');
  if (mapId.length) {
    google.maps.event.addDomListener(window, 'load', initialize);
  }

  /*======== 13. ANIMATION ========*/
  var $animation_elements = $('.animated');
  var $window = $(window);

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
      var animationType = $(this).attr('data-animation');

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        $element.addClass(animationType);
      } else {
        $element.removeClass(animationType);
      }
    });
  }

  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');


  /*======== 14. ISOTOP ========*/
	var grid = $('.gallery-grid');

	if(grid.length) {
		grid.isotope({
			itemSelector : '.element',
			layoutMode : 'fitRows'
		});

		$('#filters .button').on('click', function() {
			$('#filters .button').removeClass('active');
			$(this).addClass('active');

			var selector = $(this).attr('data-filter');
			grid.isotope({
				filter : selector
			});
			return false;
		});
	}
  /*======== 15. INSTAFEED ========*/
  var instaFeed = new Instafeed({
    get: 'user',
    userId: '217943085',
    limit: 6,
    resolution: 'standard_resolution',
    accessToken: '217943085.4259dde.7b994116887e4eb0abbbe2b856277749',
    sortBy: 'most-recent',
    template: '<li class="col-4 mb-3 pr-0"><a href="{{image}}" data-fancybox="group" title="{{caption}}" target="_blank"><img src="{{image}}"style="{{width}}" alt="{{caption}}" class="img-fluid"/></a></li>'
  });

  if($('#instafeed').length) {
    instaFeed.run();
  }
})(jQuery);
