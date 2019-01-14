var quotes=require('../controllers/quotes.js');
module.exports = function(app){
app.get('/', function(request, response) {
    quotes.index(request,response)
});
        
app.post('/quotes',function(request,response){
    quotes.pQuotes(request,response);
});
        
app.get('/quotes',function(request,response){
    quotes.gQuotes(request,response);        
});
}
