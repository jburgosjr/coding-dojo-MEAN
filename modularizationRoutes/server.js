var mongoose = require('mongoose');
var express = require('express');
var flash = require('express-flash');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();

app.listen(8000);


app.use(flash());
app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret:'activeSession',
    resave:false,
    saveUninitialized:true,
    cookie: {maxAge:60000}
    }))

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost/Quotes');
require('./server/config/mongoose.js');
 require('./server/config/routes.js')(app)





