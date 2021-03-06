/*
  [JS Index]
  
  ---
  
  Template Name: Splitex - Creative Coming Soon Template
  Author:  ex-nihilo
  Version: 1.0
*/


/*
  1. preloader
  2. elements.Timeout
  3. vegas backgrounds
  4. multiScroll
  5. owlCarousel
  6. magnificPopup
  7. countdown
  8. menu
  9. intense IMG
  10. forms
*/


$(function() {
    "use strict";
	
	
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(1200);
        $(".preloader-bg").delay(1000).fadeOut("slow");
		
        // 2. elements.Timeout
        setTimeout(function() {
            $(".ms-left, .ms-right").addClass("fadeIn");
        }, 1000);
        setTimeout(function() {
            $(".hero-center-container-right, .logo, .border-left").removeClass("left-position");
        }, 1200);
        setTimeout(function() {
            $(".hero-center-container-left, .menu-btn, .border-right").removeClass("right-position");
        }, 1200);
		setTimeout(function() {
			$(".border-top").removeClass("top-position");
		}, 1200);
		setTimeout(function() {
			$(".border-bottom").removeClass("bottom-position");
		}, 1200);
		setTimeout(function() {
			$(".border-middle-left, .border-middle-right").removeClass("fade-position");
		}, 1400);
    });
	
    // 3. vegas backgrounds
    // home IMG left
    $("#home-bg-left").vegas({
        cover: true,
        align: 'center',
        valign: 'right',
        slides: [{
            src: "img/background/home-bg-left.png"
        }]
    });
    // about IMG left
    $("#about-bg-left").vegas({
        cover: true,
        align: 'center',
        valign: 'right',
        slides: [{
            src: "img/background/about-bg-left.png"
        }]
    });
    // works IMG left
    $("#works-bg-left").vegas({
        cover: true,
        align: 'center',
        valign: 'right',
        slides: [{
            src: "img/background/works-bg-left.png"
        }]
    });
    // contact IMG left
    $("#contact-bg-left").vegas({
        cover: true,
        align: 'center',
        valign: 'right',
        slides: [{
            src: "img/background/contact-bg-left.png"
        }]
    });
    // home IMG right
    $("#home-bg-right").vegas({
        cover: true,
        align: 'center',
        valign: 'left',
        slides: [{
            src: "img/background/home-bg-right.png"
        }]
    });
    // about IMG right
    $("#about-bg-right").vegas({
        cover: true,
        align: 'center',
        valign: 'left',
        slides: [{
            src: "img/background/about-bg-right.png"
        }]
    });
    // works IMG right
    $("#works-bg-right").vegas({
        cover: true,
        align: 'center',
        valign: 'left',
        slides: [{
            src: "img/background/works-bg-right.png"
        }]
    });
    // contact IMG right
    $("#contact-bg-right").vegas({
        cover: true,
        align: 'center',
        valign: 'left',
        slides: [{
            src: "img/background/contact-bg-right.png"
        }]
    });
    // slider IMG left
    $("#left-bg-1").vegas({
        timer: false,
        delay: 5000,
        cover: true,
        align: 'center',
        valign: 'right',
        transition: 'slideUp',
        slides: [{
            src: "img/background/slide-left-1.png"
        }, {
            src: "img/background/slide-left-2.png"
        }, {
            src: "img/background/slide-left-3.png"
        }, {
            src: "img/background/slide-left-4.png"
        }]
    });
    // slider IMG right
    $("#right-bg-1").vegas({
        timer: false,
        delay: 5000,
        cover: true,
        align: 'center',
        valign: 'left',
        transition: 'slideDown',
        slides: [{
            src: "img/background/slide-right-1.png"
        }, {
            src: "img/background/slide-right-2.png"
        }, {
            src: "img/background/slide-right-3.png"
        }, {
            src: "img/background/slide-right-4.png"
        }]
    });
	
    // 4. multiScroll
    var onMobile = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        onMobile = true;
    }
    if ((onMobile === false)) {
        $("#ms-wrapper").multiscroll({
            anchors: ['home', 'about', 'works', 'contact'],
            navigation: true,
            navigationTooltips: ['Home', 'About', 'Works', 'Contact'],
            loopBottom: true,
            loopTop: true
        });
    } else {
        $("#ms-wrapper").multiscroll({
            anchors: ['home', 'about', 'works', 'contact'],
            navigation: true,
            navigationTooltips: ['Home', 'About', 'Works', 'Contact'],
            loopBottom: true,
            loopTop: true
        });
        $("#ms-wrapper").multiscroll.destroy();
    }
	
    // 5. owlCarousel
    $(".about-slider, #works-page-img-carousel").owlCarousel({
        loop: false,
        center: false,
        items: 1,
        margin: 20,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1170: {
                items: 1
            }
        }
    });
	
    // 6. magnificPopup
    $(".popup-photo-single").magnificPopup({
        type: "image",
        gallery: {
            enabled: false
        },
        removalDelay: 100,
        mainClass: "mfp-fade",
        fixedContentPos: false
    });
    $(".popup-photo-gallery").each(function() {
        $(this).magnificPopup({
            delegate: "a",
            type: "image",
            gallery: {
                enabled: true
            },
            removalDelay: 100,
            mainClass: "mfp-fade",
            fixedContentPos: false
        });
    });
	
    // 7. countdown
    // countdown setup start
    $("#countdown").countdown({
        date: "04 Nov 2020 12:00:00", // countdown target date settings
        format: "on"
    }, function() {});
	
    // 8. menu
    // menu button
    $(".menu-btn").on("click", function() {
        $(this).toggleClass("opened");
    });
    $(".main-menu li").on("click", function() {
        $(".menu-btn").removeClass("opened");
    });
    // menu content
    $(".open-menu-content, .main-menu li").on("click", function() {
        $(".menu-overlay").delay(300).fadeIn(600);
        $(".main-menu, .full-screen-wrapper").delay(250).fadeIn(500);
        if ($(".menu-container-right, .menu-container-left").hasClass("open")) {
            $(".menu-container-right, .menu-container-left").removeClass("open");
            $(".menu-container-right, .menu-container-left").addClass("close");
            $(".menu-overlay, .main-menu, .full-screen-wrapper").fadeOut(100);
        } else {
            $(".menu-container-right, .menu-container-left").removeClass("close");
            $(".menu-container-right, .menu-container-left").addClass("open");
        }
    });
    // menu active state
    $(".menu-item").on("click", function() {
        $(".menu-item").removeClass("active");
        $(this).addClass("active");
    });
	
    // 9. intense IMG
    var elements = document.querySelectorAll(".template-image");
    Intense(elements);
	
    // 10. forms
    $("form#form").on("submit", function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully</div>');
                });
            });
        }
        return !1;
    });
    $("form#subscribe").on("submit", function() {
        $("form#subscribe .subscribe-error").remove();
        $.post("subscribe.php");
        var s = !1;
        if ($(".subscribe-requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter your Email</span>'),
                    $(this).addClass("inputError"), s = !0;
                else if ($(this).hasClass("subscribe-email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter a valid Email</span>'),
                        $(this).addClass("inputError"), s = !0);
                }
            }), !s) {
            $("form#subscribe input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#subscribe").slideUp("fast", function() {
                    $(this).before('<div class="subscribe-success">Thank you for subscribing</div>');
                });
            });
        }
        return !1;
    });
	
	
});