$(window).load(function () {
    // Only allow play when all the API stuff has loaded
    $('#play').toggleClass('activePlay');
});

$(function () {
    $('#callToAction').hide();

    $('#play').click(function () {
        $('.teaser').hide();
        $('#videoContainer').css('overflow', 'visible');
    });

    $('.videoPop').click(function () {
        $('.video iframe').toggleClass('inActive');
        $('.videoPop').toggleClass('activePop');
    });
});