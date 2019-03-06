// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var pug = require('pug');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.set('view engine', 'pug');


// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  var ip = req.headers['x-forwarded-for'].split(',')[0];
  var lang = req.headers['accept-language'];
  var browser = req.headers['user-agent'];
  var headers = { 
    "ip": ip,
   "language": lang,
    "browser":  browser
  } 
  res.render('index', {title: 'Request Header API', ip: headers.ip, language: headers.language, browser: headers.browser});
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
