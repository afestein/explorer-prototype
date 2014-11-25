/*** Vimeo API ***/

$(function () {
    var iframe1 = $('#touchVideo')[0],
        touch = $f(iframe1),
        iframe2 = $('#engageVideo')[0],
        engage = $f(iframe2);

    // When the player is ready, add listeners
    touch.addEvent('ready', function () {
        touch.addEvent('playProgress', onPlayProgress);
        touch.addEvent('finish', onTouchFinish);
    });
    engage.addEvent('ready', function () {
        engage.addEvent('playProgress', onPlayProgress);
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
                $('#callToAction').fadeIn();
            }
        }
    }

    function onTouchFinish(data, id) {
        $('.video iframe').toggleClass('inActive');
        $('.videoPop').toggleClass('activePop');
        engage.api('play');
    }

    /** UI Stuff **/

    $('#play').click(function () {
        touch.api('play');
    });

    $('.videoPop').click(function () {

        if ($(this).attr('id') == "popTouch") {
            engage.api('pause');
            touch.api('play');
        }

        if ($(this).attr('id') == "popEngage") {
            touch.api('pause');
            engage.api('play');
        }
    });
});