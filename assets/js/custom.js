/*var wid = $(window).width(),
hei = $(window).height();
alert("width:" + wid +"px and height: " + hei + "px.")
*/

$(document).ready(function () {
    /*function bannerheight(){
        var head_height = $("header").outerHeight(true);
        $("body").css("padding-top",head_height + "px")
        $(".banner-sec").css("min-height","calc(100vh - " + head_height + "px)")
    };
    bannerheight();
    $(window).resize(bannerheight);*/

    $(".navbar-toggler").click(function () {
        $('html').toggleClass('show-menu');
    });

    function scrolling() {
        var sticky = $('header'),
            scroll = $(window).scrollTop();

        if (scroll >= 15) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    };
    scrolling();
    $(window).scroll(scrolling);

    // hide #back-top first
    $("#myBtn").hide();

    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#myBtn').fadeIn();
            } else {
                $('#myBtn').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#myBtn').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
    });

});


//cursor



$('.menu').click(function () {
    $(this).toggleClass('open');
});





$('#brand').owlCarousel({

    smartSpeed: 1450,
    items: 7,
    loop: true,
    autoplay: true,
    smartSpeed: 600,
    autoplay: true,
    autoplayTimeout: 2000,
    margin: 30,
    stagePadding: 30,
    nav: false,
    responsive: {
        0: {
            items: 2.5,
            nav: false
        },
        600: {
            items: 5,
            nav: false
        },
        1000: {
            items: 7,
            nav: true,
            loop: false
        }
    }
});



$('#Services').owlCarousel({
    loop: true,
    margin: 54,
    nav: true,
    navText: ["<img src='assets/images/svg/arrow-left.svg'>", "<img src='assets/images/svg/arrow-right.svg'>"],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: true
        },
        1000: {
            items: 3,
            nav: true,
            loop: false
        }
    }
})

$('#Technology').owlCarousel({
    loop: true,
    margin: 54,
    nav: true,
    navText: ["<img src='assets/images/svg/arrow-left.svg'>", "<img src='assets/images/svg/arrow-right.svg'>"],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: true
        },
        1000: {
            items: 3,
            nav: true,
            loop: false
        }
    }
})

$('#doctors').owlCarousel({
    loop: true,
    margin: 54,
    nav: true,
    navText: ["<img src='assets/images/svg/arrow-left.svg'>", "<img src='assets/images/svg/arrow-right.svg'>"],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: true
        },
        1000: {
            items: 4,
            nav: true,
            loop: false
        }
    }
})

$('#servicesec').owlCarousel({
    loop: true,
    margin: 54,
    nav: true,
    navText: ["<img src='assets/images/svg/arrow-left.svg'>", "<img src='assets/images/svg/arrow-right.svg'>"],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: true
        },
        1000: {
            items: 3,
            nav: true,
            loop: false
        }
    }
})

$('#Testimonials').owlCarousel({
    loop: true,
    margin: 54,
    nav: true,
    navText: ["<img src='assets/images/svg/arrow-left.svg'>", "<img src='assets/images/svg/arrow-right.svg'>"],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: true
        },
        1000: {
            items: 4,
            nav: true,
            loop: false
        }
    }
})
$('#countrys').owlCarousel({
    loop: true,
    margin: 54,
    nav: true,
    navText: ["<img src='assets/images/svg/arrow-left.svg'>", "<img src='assets/images/svg/arrow-right.svg'>"],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: true
        },
        1000: {
            items: 5,
            nav: true,
            loop: false
        }
    }
})


