; (function ($) {
    "use strict";
    /*============= preloader js css =============*/
    var cites = [];
    cites[0] = "Let's get you building some kick as grids!";
    cites[1] = "Can't thank you enough for checking out my course";
    cites[2] = "You're feedback goes a long way making even better lesson plans!";
    var cite = cites[Math.floor(Math.random() * cites.length)];
    $('#preloader p').text(cite);
    $('#preloader').addClass('loading');

    $(window).on('load', function () {
        setTimeout(function () {
            $('#preloader').fadeOut(500, function () {
                $('#preloader').removeClass('loading');
            });
        }, 500);
    })

})(jQuery)