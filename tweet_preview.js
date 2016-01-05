function t_preview(field,container) {
    
    var defaultstate = '<div style="text-align:center"><img src="tweet.png"/><p style="padding-top:25px;">Enter a Valid Tweet URL</p></div>';
    
 $('#'+field).on('input', function() {
    var str = $('#'+field).val();
    if(str.match(/(?:http:\/\/)?(?:www\.)?twitter\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-]*)/g)){
        $('#'+container).html("");
        arr = str.split('/');
        var tweet_id = arr[arr.length - 1];
        
        twttr.widgets.createTweet(
        tweet_id,
        document.getElementById(container),
        {
          conversation: 'none',
          width: '500'
        }
        ).then( function( el ) {
        console.log("len: "+$('#'+container).html().length);
        if ($('#'+container).html().length === 0) {
            $('#'+container).html(defaultstate);
        }
        else {
            console.log($('#'+container).html().length+" Does not equal 0");
        }
        });
        
        }
    else {
        $('#container').html(defaultstate);
    }
    });   
}

window.twttr = (function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0],
  t = window.twttr || {};
if (d.getElementById(id)) return t;
js = d.createElement(s);
js.id = id;
js.src = "https://platform.twitter.com/widgets.js";
fjs.parentNode.insertBefore(js, fjs);

t._e = [];
t.ready = function(f) {
  t._e.push(f);
};

return t;
}(document, "script", "twitter-wjs"));