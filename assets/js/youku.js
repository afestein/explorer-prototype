/*** Youku API ***/
player = new YKU.Player('touchVideo',{
    styleid: '0',
    client_id: '0e56824742130c86',
    vid: 'XODM0NjQ5NTI0',
    events:{
        onPlayerReady: function(){ /*your code*/ },
        onPlayEnd: function(){ /*your code*/ },
        onPlayStart: function(){ /*your code*/ }
    }
});