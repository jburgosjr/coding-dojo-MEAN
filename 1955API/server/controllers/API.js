var mongoose = require('mongoose');
var fiddyFive = mongoose.model('fiddyFive');

module.exports={
    slash:function(request,response){
        fiddyFive.find({},function(err,allNibbas){
            if(err){
                console.log('error getting all query',err);
                response.json({
                    message:"error retrieving data",
                    error:err
                })
            }
            else{
                response.json({
                    message:"All data retrieved",
                    data:allNibbas
                })
            }
        })
    },

    slashNewName:function(request,response){
        var add = new fiddyFive({
            name:request.params.name
        });
        add.save(function(err,newEntry){
            if(err){
                console.log("error adding new entry",err);
                response.json({
                    message:"error adding entry",
                    error:err
                });
            }
            else{
                console.log("entry saved");
                response.json({
                    message:"entry saved",
                    data:newEntry
                })

            }
        });
    },

    slashRemoveName:function(request,response){
        fiddyFive.deleteOne({name:request.params.name},function(err){
            if(err){
                console.log("error deleting entry",err)
                response.json({
                    message:"error deleting entry",
                    error:err
                })
            }
            else{
                console.log('entry deleted');
                response.json({
                    message:"entry deleted"
                });
            }
        })
    },

    slashFindName:function(request,response){
        fiddyFive.findOne({name:request.params.name},function(err,nibba){
            if(err){
                console.log('error finding entry');
                response.json({
                    message:"erron finding entry",
                    error:err
                })
            }
                else{
                    console.log('entry found');
                    response.json({
                        message:"entry found",
                        data:nibba

                    })
                }
            })
        }
    
};