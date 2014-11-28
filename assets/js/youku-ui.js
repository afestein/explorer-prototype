/** UI Stuff **/

$(function () {
    $('#play').click(function () {
        YoukuTouchPlayer.playVideo();
    });
});

//$('.videoPop').click(function () {
//
//    if ($(this).attr('id') == "popTouch") {
//        vimeoEngagePlayer.api('pause');
//        vimeoTouchPlayer.api('play');
//    }
//
//    if ($(this).attr('id') == "popEngage") {
//        vimeoTouchPlayer.api('pause');
//        vimeoEngagePlayer.api('play');
//    }
//});

//function pauseVideo(){
//    YoukuTouchPlayer.pauseVideo();
//}
//
//function seekTo(s){
//    YoukuTouchPlayer.seekTo(s);
//}
//
//function currentTime(){
//    YoukuTouchPlayer player.currentTime();
//}