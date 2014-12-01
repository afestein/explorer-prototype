/** Youku UI **/

$(document).ready(function () {
    $('#play').click(function () {
        YoukuTouchPlayer.playVideo();
    });

});

// Show play button when player is ready
var onPlayerReady = function onYoukuReady() {
    showPlayButton();
    setInterval(checkYoukuPlayer, 2000);
};

function checkYoukuPlayer() {

    var touchYoukuProgress = Math.round(YoukuTouchPlayer.currentTime() / YoukuTouchPlayer.totalTime() * 100);

    // Activate calls to action at progress milestones
    if (touchYoukuProgress > engageMilestone && $('#engageVideo').hasClass('inActive')) {
        $('.videoPop#popEngage').addClass('activePop');
    }
}