const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 8000;
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded ({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs')

app.get('/', function(req, res){
    User.find({}, function(err, users) {
        if(err){
            console.log("error getting users")
        } else {
            res.render("index", {users: users})
        }
    })
});

app.post('/users', function(req, res){
    console.log("POST DATA", req.body);
    const user = new User({name: req.body.name, age: req.body.age});
    user.save(function(err){
        if(err){
            console.log("something has gone horribly wrong");
        } else {
            console.log("you done good");
            res.redirect('/');

        }
    })
})

mongoose.connect('mongodb://localhost/basic_mongoose');

const UserSchema = new Schema ({
    name: String,
    age: Number,
})

mongoose.model('User', UserSchema);
const User = mongoose.model('User')

app.listen(port, function(){
    console.log(`listening on port ${port}`)
})

