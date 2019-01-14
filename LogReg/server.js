var express = require('express');
var session = require('express-session');
var flash = require('express-flash');
var bodyParser = require('body-parser');
var app = express();
var moment = require('moment');
var bcrypt = require('bcryptjs');
var validate = require('mongoose-validator')
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/logReg');
var UserSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:[true, 'First Name field must not be blank'],
        validate:[validate({
            validator:'isAlpha',
            message:'First Name field should only contain Alpha characters'
        }),
        validate({
            validator:'isLength',
            arguments:[3],
            message:"First name should be 3 charcters or more"
        })]
    },
    last_name:{
        type:String,
        required:[true,"Last Name field must not be blank"],
        validate:[validate({
            validator:'isAlpha',
            message:'Last Name field should only contain Alpha characters',
        }),
        validate({
            validator:'isLength',
            arguments:[3],
            message:"First name should be 3 charcters or more"   
        })]

    },
    email:{
        type:String, 
        required:[true,"Email Field must not be blank"],
        validate:[validate({
            validator:'isEmail',
            message:"Email is in an invalid format"

        })]
    },
    birthday:{
        type:Date,
        required:[true,"A birthday must be given to complete registration"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    }
},{timestamps:true});
var User = mongoose.model('User',UserSchema);
app.listen(8000);


app.use(flash());
app.use(express.static(__dirname + '/static'));
app.use(session({
secret:'activeSession',
resave:false,
saveUninitialized:true,
cookie: {maxAge:60000}
}))
app.use(bodyParser.urlencoded({extended: true}));


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
response.render('index')
});

app.post('/register',function(request,response){
    if(request.body.Password != request.body.confirmPassword){
        request.flash("regErrors","Passwords do not match");
        response.redirect('/');
    }
    else{
       User.findOne({email:request.body.email}, function(err,user){
        if(err){

        }
        else{
            if(user){
                request.flash("regErrors","Email has already been registered");
                response.redirect('/');
            }
            else{
                var user = new User({
                    first_name:request.body.fName,
                    last_name:request.body.lName,
                    email:request.body.email,
                    birthday:request.body.birthday,
                    password:request.body.Password
                });
                bcrypt.hash(request.body.Password,10)
                .then (hashed_password => {
                    if(user.password.length < 1){
                        user.save(function(err){
                            if(err){
                                for(var key in err.errors){
                                    request.flash('regErrors',err.errors[key].message);
                                }
                                response.redirect('/');
                            }
                            else{
                            }   
                        })
                    }
                    else{
                        user.password = hashed_password;
                        user.save(function(err){
                            if(err){
                                for(var key in err.errors){
                                    request.flash('regErrors',err.errors[key].message);
                                }
                                response.redirect('/');
                            }
                            else{
                                request.flash('regSuccess',"Registration successful, you may now login")
                                response.redirect('/');
                            }
                        });

                    }
   
                })
                .catch(error=>{
                    console.log(error);
                    
                    response.redirect('/');
                });
            }
        }
       });
    }
});

app.post('/login',function(request,response){
    User.findOne({email:request.body.email},function(err,user){
        if(err){
            console.log(err);
        }
        else{
            if(user){
                bcrypt.compare(request.body.Password,user.password)
                .then(check=>{
                    if(check){
                        request.session.login = true;
                        request.session.userId = user._id;
                        response.redirect('/home');
                    }
                    else{
                        request.flash('logError','Invalid Credentials');
                        response.redirect('/');
                    }
                })
                .catch(error=>{
                    console.log(error);
                });
            }
            else{
                request.flash("logError",'Invalid Credentials');
                response.redirect('/');
            }
        }
    });
});

app.get('/home',function(request,response){
    if(request.session.login != true){
        request.session.destroy();
        response.redirect('/');
    }
    else{
        User.findOne({_id:request.session.userId}, function(err,user){
            if(err){
                console.log(err);
            }
            else{
                response.render('home',{info:user, moment:moment});
            }
        });
    }
});

app.get('/logout',function(request,response){
    request.session.destroy();
    response.redirect('/');
});

