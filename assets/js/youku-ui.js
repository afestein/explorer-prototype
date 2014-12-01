/** Youku UI **/

$(document).ready(function () {
    $('#play').click(function () {
        YoukuTouchPlayer.playVideo();
    });
});

// Show play button when player is ready
var onPlayerReady = function onYoukuReady() {
    showPlayButton();
};