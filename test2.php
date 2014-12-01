<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Insert title here</title>

    <script src="http://code.jquery.com/jquery-latest.js" type="text/javascript"></script>
    <script type="text/javascript">
      var player = null;
      var isready = false;
      var onYoukuPlayerReady = function() {
        isready = true;
      };
      var pauseVideo = function() {
        if (!isready)
          return false;
        player.pauseVideo();
      };
      var OnPlayStart = function() {
        if (!isready)
          return false;
        player.playVideo();
      };
      var seekTo = function() {
        player.seekTo(1);
      };
      var onPlayEnd = function() {
        alert("播放结束");
      };

      function showTime(){
        var time = player.currentTime();
        alert(time);
      }
    </script>
    <style type="text/css">
      #youkuplayer {
        width: 500px;
        height: 500;
      }
    </style>
  </head>
  <body>
    <div id="youkuplayer"></div>
    <a href="#" onclick="player.playVideo();">现在播放时间</a>
    <script type="text/javascript" src="http://player.youku.com/jsapi">
      player = new YKU.Player('youkuplayer', {
        width : 500,
        height : 500,
//        autoplay:true,
        client_id : '1e2ec16ba3ad918c',
        vid : 'XNTU3NjgwOTU2',
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