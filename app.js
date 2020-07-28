var express = require('express');
var ejs = require('ejs');
var bodyParser 	= require('body-parser');

var login = require('./controllers/login');
var admin = require('./controllers/admin');
var employee = require('./controllers/employee')
var app = express();
app.set('view engine','ejs');

app.use(bodyParser());
app.use('/login',login);
app.use('/admin',admin);
app.use('/employee',employee);
app.get('/', function(req, res){
	res.send("this is index page!<br> <a href='/login'> login</a> ");
});

app.listen(25565,()=>{
    console.log('express server started at 25565');
});
