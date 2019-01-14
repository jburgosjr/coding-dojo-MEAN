var fiddy=require('../controllers/API.js');
module.exports = function(app){
    app.get('/',function(request,response){
        fiddy.slash(request,response);
    });

    app.get('/new/:name',function(request,response){
        fiddy.slashNewName(request,response);
    });

    app.get('/remove/:name',function(request,response){
        fiddy.slashRemoveName(request,response);
    });

    app.get('/:name',function(request,response){
        fiddy.slashFindName(request,response);
    })
};

