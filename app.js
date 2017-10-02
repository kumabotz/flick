var express = require('express');
var FlickAPI = require('flick-electric-api')
// set up API
var username = '<flick username / email address>';
var password = '<flick password>';
var flick = new FlickAPI(username, password);

var app = express();

app.get('/', function (req, res) {
  // attach some events
  flick.on('error', function(err) {
    console.log("Error: " + err);
  });
  flick.on('price', function(price) {
    price = (price * 100).toFixed(1)
    res.end('<div style="text-align:center;"><h1 style="font-size:300px;display:inline-block;margin-bottom:0;">' + price + '</h1> <span style="color:#333;display:block;text-transform:CAPITALIZE;">cents per unit</span></div>');
  });
  flick.get_price();
});

var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log('App now running on port', port);
});
