/*** Vimeo API ***/

$(function () {
    var iframe1 = $('#touchVideo')[0],
        vimeoTouchPlayer = $f(iframe1),
        iframe2 = $('#engageVideo')[0],
        vimeoEngagePlayer = $f(iframe2);

    // When the player is ready, add listeners
    vimeoTouchPlayer.addEvent('ready', function () {
        vimeoTouchPlayer.addEvent('playProgress', onPlayProgress);
        vimeoTouchPlayer.addEvent('finish', onVimeoTouchPlayerFinish);
        showPlayButton();
    });

    function onPlayProgress(data, id) {
        var timePercentComplete = Math.round((data.percent) * 100);

        // Activate calls to action at progress milestones
        if (id == "touchVideo") {
            if (timePercentComplete > 1) {
                $('.videoPop#popEngage').addClass('activePop');
            }
        }

        else {
            if (timePercentComplete > 75) {
                $('.callToAction').fadeIn();
            }
        }
    }

    function onVimeoTouchPlayerFinish(data, id) {
        $('.video iframe').toggleClass('inActive');
        $('.videoPop').toggleClass('activePop');
        vimeoEngagePlayer.api('play');
    }

    /** UI Stuff **/

    $('#play').click(function () {
        vimeoTouchPlayer.api('play');
    });

    $('.videoPop').click(function () {

        if ($(this).attr('id') == "popTouch") {
            vimeoEngagePlayer.api('pause');
            vimeoTouchPlayer.api('play');
        }

        if ($(this).attr('id') == "popEngage") {
            vimeoTouchPlayer.api('pause');
            vimeoEngagePlayer.api('play');
        }
    });
});