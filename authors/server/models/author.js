var mongoose = require('mongoose');

var AuthorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name field must not be blank"],
        minlength:[3,"Author name must be 3 charactes or more"]

    }
});

mongoose.model('Author',AuthorSchema);