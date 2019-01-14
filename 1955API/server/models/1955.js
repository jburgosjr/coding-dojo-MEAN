var mongoose = require('mongoose');

var fiddyFiveSchema = new mongoose.Schema({
    name: {type: String, required:[true,"name needed"]}
},{timestamps:true});

mongoose.model('fiddyFive',fiddyFiveSchema);
