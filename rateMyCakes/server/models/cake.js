var mongoose = require('mongoose');

var RatingSchema = new mongoose.Schema({
    rating: {type:Number},
    review: {type:String}
},{timestamps:true});

var CakeSchema = new mongoose.Schema({
    name:{type:String},
    image:{type:String},
    reviews:[RatingSchema]
});

mongoose.model('Rating',RatingSchema);
mongoose.model('Cake',CakeSchema);
