// YouTube API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Set up videos
var touchVideo;
var engageVideo;
function onYouTubePlayerAPIReady() {
    var height = '658';
    var width = '1170';
    touchVideo = new YT.Player('touchVideo', {
        height: height,
        width: width,
        videoId: '6oqhNNW1exE',
        playerVars: {rel: 0},
        events: {
            'onReady': onEngagePlayerReady,
            'onStateChange': onEngagePlayerStateChange
        }
    });
    engageVideo = new YT.Player('engageVideo', {
        height: height,
        width: width,
        videoId: 'W7aYRUQtIfw',
        playerVars: {rel: 0}
    });
}

function onEngagePlayerReady(event) {
    setInterval(checkPlayer, 1000);
}

function checkPlayer() {
    var touchProgress = Math.round(touchVideo.getCurrentTime() / touchVideo.getDuration() * 100);
    var engageProgress = Math.round(engageVideo.getCurrentTime() / engageVideo.getDuration() * 100);

    // Deploy calls to action at milestones
    if (touchProgress > 1 && $('#engageVideo').hasClass('inActive')) {
        $('.videoPop#popEngage').addClass('activePop');
    }

    if (engageProgress > 75) {
        $('#callToAction').fadeIn();
    }
}

function onEngagePlayerStateChange(newState) {
    // On video end
    if (newState.data == 0) {
        $('.video iframe').toggleClass('inActive');
        $('.videoPop').toggleClass('activePop');
        engageVideo.playVideo();
    }
}

/** UI Stuff **/

$(function () {
    $('#callToAction').hide();

    $('#play').click(function () {
        $('.teaser').hide();
        $('#videoContainer, #touchVideo, #engageVideo').removeAttr('style');
        $('#videoContainer').css('overflow', 'visible');
        touchVideo.playVideo();
    });

    $('.videoPop').click(function () {
        $('.video iframe').toggleClass('inActive');
        $('.videoPop').toggleClass('activePop');

        if ($(this).attr('id') == "popTouch") {
            engageVideo.pauseVideo();
            touchVideo.playVideo();
        }

        if ($(this).attr('id') == "popEngage") {
            touchVideo.pauseVideo();
            engageVideo.playVideo();
        }
    });
});

// When page is fully loaded
$(window).load(function () {
    $('#play').toggleClass('activePlay');
});