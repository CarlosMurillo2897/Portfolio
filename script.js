$(document).ready(function () {
    $(window).scroll(function () {
        toggleClass('.navbar', 'sticky', 20);
        toggleClass('.scroll-up-btn', 'show', 500);
    });

    function toggleClass(searchClass, toggleClass, scrolled) {
        this.scrollY > scrolled ? $(searchClass).addClass(toggleClass) : $(searchClass).removeClass(toggleClass);
    }

    // Toogle Menu/Navbar Script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    // Typing Animation Script
    new Typed('.typing', {
        strings: ['Developer', 'Consultant', 'Designer', 'Freelancer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    new Typed('.typing-2', {
        strings: ['Developer', 'Consultant', 'Designer', 'Freelancer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

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