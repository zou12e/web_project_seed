



var express = require('express');
var session = require('express-session');
var iconv = require('iconv-lite')

var cookieParser = require('cookie-parser');
var libHttp = require('http'); 
var libUrl  = require('url'); 

var apps = express(),maxAge = 1000*60*30;
apps.use(express.static('app_min'));


apps.use(cookieParser('userinfo'));
apps.use(session({
	name: 'user',
	cookie: {maxAge: maxAge }, 
	rolling: true
}));


var http = require('http');
http.createServer(apps).listen(80, function (req,res) {});
