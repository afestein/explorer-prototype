// JS shared regardless of provider

var engageMilestone = 5;
var decideMilestone = 75;

$(function () {
    $('.callToAction').hide();
    $('#engageVideo').addClass('engageLoad');

    $('#play').click(function () {
        $('.teaser').hide();
        $('.row.teaser').hide();
        $('.row.video').removeAttr('style');
    });

    $('.videoPop').click(function () {
        $('.video iframe').toggleClass('inActive');
        $('.videoPop').toggleClass('activePop');
        $('#engageVideo').removeClass('engageLoad');
    });
});

function showPlayButton() {
    $('#playButton').fadeIn('slow');
}