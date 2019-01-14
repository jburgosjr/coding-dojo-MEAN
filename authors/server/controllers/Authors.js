var mongoose = require('mongoose');
var Author = mongoose.model('Author');

module.exports={
    index:function(request,response){
        Author.find({},function(err,list){
            if(err){
                console.log("error retriving all authors",err);
                response.json({
                    message:"error retriving authors",
                    error:err
                })
            }
            else{
                response.json({
                    authors:list
                })
            }
        })
    },

    findById:function(request,response){
        Author.findOne({_id:request.params.id},function(err,author){
            if(err){
                console.log("error retriving indivifual author");
                response.json({
                    message:"error retriving individual author",
                    error:err
                })
            }
            else{
                response.json({
                    author:author
                })
            }
        });
    },

    newAuthor:function(request,response){
        var add = new Author({
            name:request.body.name
        });

        add.save(function(err,newAuthor){
            if(err){
                console.log("error creating new author");
                response.json({
                    message:"error creating new author",
                    error:err
                })
            }
            else{
                response.json({
                    newAuthor:newAuthor
                })
            }
        });
    },

    editAuthor:function(request,response){
        Author.findByIdAndUpdate({_id:request.params.id},{
            $set:{
                name:request.body.name
            }
        },{runValidators:true},function(err,edit){
            if(err){
                console.log("error updating author")
                response.json({
                    message:"error updating author",
                    error:err
                })
            }
            else{
                response.json({
                    author:edit
                })
            }
        });
    },

    deleteAuthor:function(request,response){
        Author.findOneAndRemove({_id:request.params.id},function(err){
            if(err){
                console.log("error deleting author")
                response.json({
                    message:"error deleting authror",
                    error:err
                })
            }
            else{
                response.json({
                    message:"author terminated"
                })
            }
        })
    }
}