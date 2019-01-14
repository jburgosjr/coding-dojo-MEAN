var task = require('../controllers/API.js');
module.exports = function(app){
    app.get('/task',function(request,response){
    task.index(request,response);
    });

    app.get('/task/:id',function(request,response){
        task.getById(request,response);
    })

    app.post('/task',function(request,response){
        task.postTask(request,response);
    });

    app.put('/task/:id',function(request,response){
        task.putTask(request,response);
    });

    app.delete('/task/:id',function(request,response){
        task.deleteTask(request,response);
    })
};