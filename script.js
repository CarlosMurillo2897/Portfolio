$(document).ready( function() {
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('.navbar').addClass('sticky');
        }else {
            $('.navbar').removeClass('sticky');
        }
    });
    // Toogle Menu/Navbar Script
    $('.menu-btn').click(function() {
        toggleClasses();
    });
    
    $('.menu li a').click(function() {
        toggleClasses();
    });

    function toggleClasses() {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    }

    // Owl Carousel Script
    $('.carousel').owlCarousel({
        margin: 20, // L-R Margin between each.
        loop: true,
        autoplayTimeOut: 2000,
        autoPlayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            },
        }
    });
});