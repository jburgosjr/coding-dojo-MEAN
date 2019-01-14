var mongoose = require('mongoose');

var GoldSchema = new mongoose.Schema({
    totalGold :{type:Number,default:0},
    log:[]
});

mongoose.model("Gold",GoldSchema);