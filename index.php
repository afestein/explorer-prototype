<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Show2Me Prototype</title>
    <link rel="stylesheet" type="text/css" href="assets/bower_components/bootstrap/dist/css/bootstrap.css"/>
    <link rel="stylesheet" type="text/css" href="assets/styles.css"/>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
  </head>
  <body>
    <div class="container-fluid">
      <div class="row teaser">
        <div class="col-lg-12 content">
          <div class="table">
            <div class="cell">
              <h1>It Changes Everything</h1>
              <div id="play"></div>
              <p id="videoText">Throughout history, people have sung about the mysterious love of God. If his love is so great, why don't we see it on earth? They sing of freedom, but all I see is hunger, sickness, pain. This world is broken. Where's the proof that God loves us? A friend of mine told me a story about how God came to earth as a man, to rescue us...</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row video">
        <div class="col-lg-12">
          <div id="videoContainer">
            <div class="videoPop" id="popEngage">
              <img src="assets/img/pop4.jpg" alt="popup"/>
              <div class="playMini"></div>
              <p>IS YOUR LIFE AS FULFILLING<br/>AS IT COULD BE?</p>
            </div>
            <div class="videoPop" id="popTouch">
              <img src="assets/img/pop3.jpg" alt="popup"/>
              <div class="playMini"></div>
              <p>IT CHANGES EVERYTHING</p>
            </div>

            <?php if ($_GET['touch'] == 'youtube'): ?>
              <div id="touchVideo"></div>
            <?php endif; ?>

            <?php if ($_GET['touch'] == 'vimeo'): ?>
              <iframe id="touchVideo" src="//player.vimeo.com/video/92439949?api=1&player_id=touchVideo" width="1170" height="658" frameborder="0"></iframe>
            <?php endif; ?>

            <?php if ($_GET['engage'] == 'youtube'): ?>
              <div id="engageVideo" class="inActive"></div>
            <?php endif; ?>

            <?php if ($_GET['engage'] == 'vimeo'): ?>
              <iframe id="engageVideo" class="inActive" src="//player.vimeo.com/video/79400310?api=1&player_id=engageVideo" width="1170" height="658" frameborder="0"></iframe>
            <?php endif; ?>
            <div class="clear"></div>
          </div>
          <div class="clear"></div>
        </div>
      </div>
      <div class="row callToAction">
        <div class="col-lg-4">
          Yes!
        </div>
        <div class="col-lg-4" style="border:1px solid #CCC; border-width:0 1px;">
          Ask a Question
        </div>
        <div class="col-lg-4">
          Spread the news
        </div>
      </div>
      <div class="row footer">
        <div class="col-lg-12">
          Footer goes here
        </div>
      </div>
    </div>

    <!-- Scripts -->
    <script type="text/javascript" src="assets/bower_components/jquery/dist/jquery.min.js"></script>
    <script type="text/javascript" src="assets/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="assets/js/common.js"></script>

    <?php if ($_GET['touch'] == 'youtube' || $_GET['engage'] == 'youtube'): ?>
      <script type="text/javascript" src="assets/js/youtube.js"></script>
    <?php elseif ($_GET['touch'] == 'vimeo' || $_GET['engage'] == 'vimeo'): ?>
      <script type="text/javascript" src="assets/bower_components/froogaloop/froogaloop.min.js"></script>
      <script type="text/javascript" src="assets/js/vimeo.js"></script>
    <?php endif; ?>

  </body>
</html>