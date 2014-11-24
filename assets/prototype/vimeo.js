$(function () {

    /*** API Stuff ***/

    var iframe1 = $('#touchVideo')[0],
        touch = $f(iframe1),
        iframe2 = $('#engageVideo')[0],
        engage = $f(iframe2);

    // When the player is ready, add listeners
    touch.addEvent('ready', function () {
        touch.addEvent('playProgress', onPlayProgress);
    });
    engage.addEvent('ready', function () {
        engage.addEvent('playProgress', onPlayProgress);
    });

    function onPlayProgress(data, id) {
        var timePercentComplete = Math.round((data.percent) * 100);

        // After a % of the video has been played
        if (id == "touchVideo") {
            if (timePercentComplete > 5) {
                // deploy Jesusbot
                $('.videoPop.popEngage').fadeIn();
            }
        }

        if (timePercentComplete > 75) {
            // deploy call to action
            $('#callToAction').fadeIn();
        }
    }

    /** UI Stuff **/

    $('#callToAction').hide();

    $('#play').click(function () {
        $('.teaser').hide();
        $('.video').css('display', 'table-row');
        touch.api('play');
    });

    $('.videoPop').click(function () {
        $('.video iframe').toggle();
        $('.videoPop').fadeToggle();
    });

    $('.videoPop.popEngage').click(function () {
        touch.api('pause');
        engage.api('play');
    });

    $('.videoPop.popTouch').click(function () {
        engage.api('pause');
        touch.api('play');
    });
});

// When page is fully loaded
$(window).load(function () {
    $('#play').toggleClass('activePlay');
});