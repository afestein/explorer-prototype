// JS shared regardless of provider
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

function showPlayButton() {
    $('#playButton').fadeIn('slow');
}