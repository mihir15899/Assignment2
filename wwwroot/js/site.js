// Smooth scrolling effect for navigation links
$(document).ready(function () {
    $(".nav-link").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

// Toggle functionality for mobile menu
$('.navbar-toggler').on('click', function () {
    $('.navbar-collapse').toggleClass('show');
});

// Sticky navigation bar
$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        $('nav').addClass('fixed-top');
    } else {
        $('nav').removeClass('fixed-top');
    }
});
