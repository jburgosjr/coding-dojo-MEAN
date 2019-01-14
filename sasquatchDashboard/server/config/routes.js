var sasDash=require('../controllers/sasquatchDashBoard.js');
module.exports =function(app){
    app.get('/', function(request, response) {
        sasDash.index(request,response);
        
    });
    
    app.get('/sasquatch/new',function(request,response){
        sasDash.newSas(request,response);
    });
    
    app.post('/sasquatch/new',function(request,response){
        sasDash.addSas(request,response);
    });
    
    app.get('/sasquatch/:id',function(request,response){
        sasDash.sasinfo(request,response);
    });
    
    app.get('/sasquatch/edit/:id',function(request,response){
        sasDash.sasEdit(request,response);
    });
    
    app.post('/sasquatch/edit/:id',function(request,response){
        sasDash.sasEditPost(request,response);
    });
    
    app.post('/sasquatch/destroy/:id',function(request,response){
        sasDash.sasDelete(request,response);
    });
}

