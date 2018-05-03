const express = require("express");
const bodyParser = require("body-parser")
const port = process.env.PORT || 8000;
const app = express();
const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const path = require("path");
const session = require("express-session")
const uniqueValidator = require('mongoose-unique-validator');

app.use(bodyParser.urlencoded({ extended: true}))
app.use(session({
    secret: 'supersecretpassword',
    maxAge: 1000,
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));


// create get routes
app.get('/', function(req, res){
    req.session.destroy();
    res.render('index')
})
app.get('/welcome', function(req, res){
    User.findOne({email: req.session.email}, function(err, user){
        if(err){
            console.log(err);
            res.redirect('/')
        } else {
            res.render('welcome', {user})
        }
    })
})
// create post routes
app.post('/processRegistration', function(req, res){
    console.log(req.body)
    const user = new User({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        bday: req.body.bday
    })
    user.save(function(err){
        if(err){
            console.log(err);
            res.render('index', {errors: user.errors})
        } else {
            console.log("saved user", user);
            req.session.email = user.email;
            console.log(req.session.email, "THIS IS THE SESSION EMAIL")
            res.redirect('/welcome')
        }
    })
})

app.post('/processLogin', function(req, res){
    console.log(req.body)
    User.findOne({email: req.body.email}, function(err, user){    
        console.log("this is user", user)  
        if(!user){
            console.log("error at find user")
            throw new Error('whooooooops')
            res.redirect('/')
        } else {
            bcrypt.compare(req.body.password, user.password)
                .then( result => {
                    console.log("password match result", result)
                    res.redirect('/')

	            })
                .catch( error => {	 
                    console.log("error:", error)
                    res.redirect('/')
                })
        }
    })
})
// create schemas


const userSchema = new Schema ({
    email: {type: String, required: [true, "you must enter an e-mail"], unique: [true, "that e-mail is already registered"]},
    firstName: {type: String, required: [true, "Names must be 2 or more characters"], minlength: 2},
    lastName: {type: String, required: [true, "Names must be 2 or more characters"], minlength: 2},
    password: {type: String, required: [true, "Password must be 7 or more characters"], minlength: 7},
    bday: {type: Date, required: [true, "you must enter a birthday"]}
}, {timestamps:true})

userSchema.plugin(uniqueValidator);

userSchema.pre('save', function(next){
    if(!this.isModified('password')) return next();

    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        })
        .catch(next);
    })

// create models
const User = mongoose.model('User', userSchema);

//connect to mongodb
mongoose.connect('mongodb://localhost/loginRegistration');
mongoose.connection.on('connected', function(){
    console.log('connected to mongoDB')
})

app.listen(port, function(){
    console.log(`listening on port: ${port}`)
})