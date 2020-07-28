var express = require('express');
var ejs = require('ejs');

var home = require('./controllers/home')
var app = express();
app.set('view engine','ejs');