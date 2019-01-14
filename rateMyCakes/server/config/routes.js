var rateCake = require('../controllers/rateMyCakes.js');

module.exports = function(app){
    app.get('/allCakes',function(request,response){
        rateCake.allCakes(request,response);
    });

    app.get('/cakeBy/:id',function(request,response){
        rateCake.cakeById(request,response);
    });

    app.post('/addCake',function(request,response){
        rateCake.addCake(request,response);
    });

    app.post('/addRating/:id',function(request,response){
        rateCake.addReview(request,response);
    });


}