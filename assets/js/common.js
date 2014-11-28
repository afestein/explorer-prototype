$(window).load(function () {
    // Only allow play when all the API stuff has loaded
    $('#playButton').toggleClass('activePlay');
});

$(function () {
    $('.callToAction').hide();

    $('#play').click(function () {
        $('.teaser').hide();
        $('.row.teaser').hide();
        $('.row.video').removeAttr('style');
    });

    $('.videoPop').click(function () {
        $('.video iframe').toggleClass('inActive');
        $('.videoPop').toggleClass('activePop');
    });
});