var mongoose = require('mongoose');
var DashSchema = new mongoose.Schema({
    name:{type:String, required:[true,"Sasquatch must have a Name"],minlength:[3,"Name must be 3 characters or more"]},
    age:{type:Number,required:[true,"Sasquatch must have an age"]},
    Hair_color:{type:String,required:[true,"Every sasquatch is unique, you must log the hair color"],minlength:[3,"there is no color less than three characters"]},
    image:{type:String}
},{timestamps:true});
mongoose.model('Dash',DashSchema);