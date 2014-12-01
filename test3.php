<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Insert title here</title>
    <script type="text/javascript">
      var YoukuTouchPlayer = null;
      var isready = false;
      var onYoukuPlayerReady = function() {
        isready = true;
      };
      var pauseVideo = function() {
        if (!isready)
          return false;
        YoukuTouchPlayer.pauseVideo();
      };
      var OnPlayStart = function() {
        if (!isready)
          return false;
        YoukuTouchPlayer.playVideo();
      };
      var seekTo = function() {
        YoukuTouchPlayer.seekTo(1);
      };
      var onPlayEnd = function() {
        alert("播放结束");
      };

      function showTime(){
        var time = YoukuTouchPlayer.currentTime();
        alert(time);
      }
    </script>
  </head>
  <body>
    <div id="touchVideo" style="width:1170px;height:658px"></div>
    <a href="#" onclick="YoukuTouchPlayer.playVideo();">现在播放时间</a>
    <script type="text/javascript" src="http://player.youku.com/jsapi">
      YoukuTouchPlayer = new YKU.Player('touchVideo', {
        width : 500,
        height : 500,
//        autoplay:true,
        client_id : '0e56824742130c86',
        vid : 'XODM0NjQ5NTI0',
        events : {
          'onPlayerReady' : seekTo, //播放器准备就绪调用
          'onPlayStart' : OnPlayStart, //播放器开始播放时调用
          'onPlayEnd' : onPlayEnd
          //播放器结束播放时调用
        }
      });
    </script>
  </body>
</html>