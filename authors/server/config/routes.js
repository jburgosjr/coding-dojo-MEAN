var author = require('../controllers/Authors.js');
var path = require('path');

module.exports = function(app){
    app.get('/allAuthors',function(request,response){
        author.index(request,response);
    });

    app.get('/author/:id',function(request,response){
        author.findById(request,response);
    });

    app.post('/newAuthor',function(request,response){
        author.newAuthor(request,response);
    });

    app.put('/editAuthor/:id',function(request,response){
        author.editAuthor(request,response);
    });

    app.delete('/annihilate/:id',function(request,response){
        author.deleteAuthor(request,response);
    });

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
      });
    
}