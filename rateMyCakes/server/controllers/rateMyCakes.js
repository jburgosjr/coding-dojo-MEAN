var mongoose = require('mongoose');
var rating = mongoose.model('Rating');
var cake = mongoose.model('Cake');

module.exports={
    allCakes:function(request,response){
        cake.find({},function(err,cakes){
            if(err){
                console.log("error retrieving cakes",err);
            }
            else{
                console.log("feching cakes");
                response.json({
                    allCakes:cakes
                });
            }
        });
    },

    cakeById:function(request,response){
        cake.findById({_id:request.params.id},function(err,aCake){
            if(err){
                console.log('error finding individual cake',err)
            }
            else{
                console.log("fetching cake");
                response.json({
                    cake:aCake
                });
            }
        });
          
  
    },

    addCake:function(request,response){
        var fresh = new cake({
            name:request.body.name,
            image:request.body.image
        });
        fresh.save(function(err){
            if(err){

            }
            else{
                response.json({
                    newCake:fresh
                });
            }
        });
    },

    addReview:function(request,response){
        rating.create({
            rating:request.body.rating,
            review:request.body.review
        },function(err,review){
            if(err){
                console.log("error making review object"),err;
            }
            else{
                cake.findByIdAndUpdate({_id:request.params.id},{$push:{reviews:review}},function(err,reviewedCake){
                    if(err){
                        console.log("error adding review to cake",err);
                    }
                    else{
                        response.json({
                            cake:reviewedCake
                        })
                    }
                });
            }
        });
    }
}