const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");
const { Schema } = mongoose;

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// get routes
// root route
app.get('/', function(req, res){
    Message.find({},function(err, messages){
        console.log(messages)
        if(err){
            console.log(err);
            res.render('index')
        } else {
            res.render('index', {messages: messages})
        }
    })
})

// post routes
// grab data from message form
app.post('/processMessage', function(req, res){
    console.log(req.body)
    const message = new Message({
        name: req.body.name,
        message: req.body.message
    })
    message.save(function(err){
        if(err){
            console.log(err)
            res.redirect('/')
        } else {
            console.log("successful data save", req.body.message)
            res.redirect("/")
        }
    })
})
// grab data from comments and update message
app.post('/processComment/:id', function(req, res){
    console.log(req.body)
    const comment = new Comment({
        name: req.body.name,
        comment: req.body.comment
    })
    comment.save(function(err){
        if(err){
            console.log(err)
            res.redirect('/')
        } else {
            console.log("successful comment", req.body.comment)
            Message.update({_id:req.params.id}, {$push: {comments: comment}}, function(err){
                if(err){
                    console.log(err);
                    res.redirect("/")
                } else {
                    console.log("successful comment pushed to message");
                    res.redirect("/")
                }
            })
        }
    })
})

//make schemas
const MessageSchema = new Schema({
    name: {
        type: String, 
        required: [true, "You must enter a name"], 
        minlength: [2, "Name must be atleast 2 characters"]
    },
    message: {
        type: String,
        required: [true, "You must enter a message"],
        minlength: [5, "Message must be atleast 5 characters"]
    },
    comments: []
}, {timestamp: true})

const CommentSchema = new Schema({
    name: {
        type: String,
        required: [true, "You must enter a name"],
        minlength: [2, "Name must be atleast 2 characters"]
    },
    comment: {
        type: String,
        required: [true, "Comment cannot be blank"],
        minlength: [5, "gotta be longer"]   
    }
}, {timestamp: true})

//make models
mongoose.model('Message', MessageSchema);
const Message = mongoose.model('Message');

mongoose.model('Comment', CommentSchema);
const Comment = mongoose.model('Comment')

// connect to mongoDB
mongoose.connect('mongodb://localhost/messageBoard');
mongoose.connection.on('connected', function(){
    console.log('connected to mongoDB')
})

app.listen(port, function(){
    console.log(`listening on port: ${port}`)
})
