var gold = require('../controllers/goldFunk.js');
var bodyParser = require('body-parser');

module.exports= function(app){
    app.get('/start',function(request,response){
        gold.index(request,response);
    });

    app.get('/load/:id',function(request,response){
        gold.gameById(request,response);
       
    });

    app.put('/addSave/',function(request,response){
        console.log('save route')
        gold.Update(request,response)
       
    })


}