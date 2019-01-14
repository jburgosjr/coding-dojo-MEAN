var mongoose = require('mongoose');

var Dash = mongoose.model('Dash');
var moment = require('moment');

module.exports={
    index:function(request,response){
        Dash.find({},function(err,allSas){
            if(err){
                console.log("all sasquatch find error");
            }
            else{
                response.render('index',{
                    sasquatches:allSas,
                    moment:moment
                });
            }
        }).sort({createdAt:'desc'});
    },
    newSas:function(request,response){
        response.render('new');
    },
    addSas:function(request,response){
        var sassy = new Dash({
            name:request.body.name,
            age:request.body.age,
            Hair_color:request.body.hair,
            image:request.body.image
        });
        sassy.save(function(err){
            if(err){
                for(var key in err.errors){
                    request.flash('inputs',err.errors[key].message);
                }
                response.redirect('/sasquatch/new');
            }
            else{
                response.redirect('/');
            }
        });
    },
    sasinfo:function(request,response){
        Dash.find({_id:request.params.id},function(err,indSasquatch){
            if(err){
                console.log("error with sasquatch id query");
            }
            else{
                console.log(indSasquatch.image);
                response.render('info',{
                    info:indSasquatch,
                    moment:moment
                });
            }
        });
    },
    sasEdit:function(request,response){
        Dash.find({_id:request.params.id},function(err,indSasquatch){
            if(err){
                console.log("error with sasquatch id edit query");
            }
            else{
                console.log(indSasquatch.image);
                response.render('edit',{
                    info:indSasquatch,
                    
                });
            }
        });
    },
    sasEditPost:function(request,response){
        Dash.findOneAndUpdate({_id:request.params.id},{
            name:request.body.name,
            age:request.body.age,
            Hair_color:request.body.hair,
            image:request.body.image
    
        },{runValidators:true},function(err){
            if(err){
                for(var key in err.errors){
                    request.flash('inputs',err.errors[key].message);
                }
                response.redirect(`/sasquatch/edit/${request.params.id}`);
            }
            else{
                response.redirect('/');
            }
        });
    },
    sasDelete:function(request,response){
        Dash.remove({_id:request.params.id},function(err){
            if(err){
                console.log('error on destroy')
            }
            else{
                response.redirect('/');
            }
        }); 
    }


};