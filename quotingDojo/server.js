var express = require('express');
var flash = require('express-flash');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var QuotesSchema = new mongoose.Schema({
    name: {type:String, required:[true,"name field must not be blank"], minlength:[3,"name must be three characters or more"]},
    quote:{type:String, required:[true,"quote field must not be blank"],  maxlength:[60,"quote must be 60 characters or less"]}
}, {timestamps:true});
mongoose.model('Quotes',QuotesSchema);
var Quotes= mongoose.model('Quotes');
mongoose.connect('mongodb://localhost/Quotes');
var moment = require('moment');
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


app.get('/', function(request, response) {
response.render('index')
});

app.post('/quotes',function(request,response){
    var quote = new Quotes({name:request.body.name , quote:request.body.quote });
    quote.save(function(err){
        if(err){
            console.log ("something went wrong",err);
            for(var key in err.errors){
                request.flash('quotes',err.errors[key].message);
                
            }
            response.redirect('/');
            
        }
        else{
            console.log("quote has been saved");
            response.redirect('/quotes');
        }
    });
});

app.get('/quotes',function(request,response){
    Quotes.find({}).sort({createdAt:"desc"}).exec(function(err,allQuotes){
        if (err){
            console.log("query error")
        }
        else{
            response.render('quotes',{
                quotes:allQuotes,
                moment:moment
            });
        }
    });
    
});


