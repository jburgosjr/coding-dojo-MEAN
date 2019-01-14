var mongoose = require('mongoose');
var Quotes= mongoose.model('Quotes');
var moment = require('moment');
module.exports={
    index:function(request,response){
        response.render('index');
    },
    pQuotes:function(request,response){
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
    },
    gQuotes:function(request,response){
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
    }
};