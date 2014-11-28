$(window).load(function () {
    // Only allow play when all the API stuff has loaded
    $('#play').toggleClass('activePlay');
});

$(function () {
    $('.callToAction').hide();
//    $('.row.teaser').hide();



//    $('.video').css('height','0');

    $('#play').click(function () {
        $('.teaser').hide();
//        $('#videoContainer').css('overflow', 'visible');
//        $('.video').css('overflow', 'visible');
        $('.row.teaser').hide();
        $('.row.video').removeAttr('style');
    });

    $('.videoPop').click(function () {
        $('.video iframe').toggleClass('inActive');
        $('.videoPop').toggleClass('activePop');
    });
});