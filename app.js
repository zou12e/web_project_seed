



var express = require('express');
var path = require('path');
var session = require('express-session');
var iconv = require('iconv-lite');
var compression = require('compression');
var cookieParser = require('cookie-parser');
var libUrl  = require('url'); 
var app = express();
var maxAge = 1000*60*30;





app.use(cookieParser('userinfo'));
app.use(session({
	name: 'userinfo',
	cookie: {maxAge: maxAge }, 
	rolling: true
}));
app.use(compression());

app.use(express.static(path.join(__dirname, 'app')))
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'app', 'index.html'))
})


var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
