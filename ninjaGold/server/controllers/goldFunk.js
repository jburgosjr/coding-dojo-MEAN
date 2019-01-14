var mongoose = require('mongoose');
var Gold = mongoose.model("Gold");

module.exports={
    index:function(request,response){
        console.log("it hit start");
        var start = new Gold();
        start.save(function(err,newGame){
            if(err){
                console.log("error creating new game");
                
            }
            else{
                response.json({
                    message:"new game start",
                    data:newGame
                });
            }

        });
    },

    gameById:function(request,response){
        console.log("it hit find by id")
        Gold.findOne({_id:request.params.id},function(err,load){
            if(err){
                console.log("error finding previous game",err)
            }
            else{
                response.json(load);
            }
        });
    },

    Update:function(request,response){
        Gold.findByIdAndUpdate({_id:request.body._id},{$set:{
            totalGold:request.body.totalGold,
            log:request.body.log
        }},function(err,save){
            if(err){
                console.log("error saving data")
            }
            else{
                console.log(save);
                response.json(save);
            }
        });
    }
}