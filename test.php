<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript">
      var OnPlayStart = function () {
        player.playVideo();
      };
    </script>

  </head>
  <body>

    <div id="touchVideo" style="width:1170px;height:658px"></div>

    <script type="text/javascript" src="http://player.youku.com/jsapi">

      /*** Youku API ***/

      player = new YKU.Player('touchVideo', {
        styleid: '0',
        client_id: '0e56824742130c86',
        vid: 'XODM0NjQ5NTI0',
        events: {
          onPlayerReady: function () { /*your code*/
          },
          onPlayStart: OnPlayStart,
          onPlayEnd: function () { /*your code*/
          }
        }
      });
      function pauseVideo() {
        player.pauseVideo();
      }
      function seekTo(s) {
        player.seekTo(s);
      }
      function currentTime() {
        return player.currentTime();
      }
      function playVideo() {
        player.playVideo();
      }
    </script>


  </body>
</html>