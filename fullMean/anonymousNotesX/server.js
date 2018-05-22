const bodyParser = require('body-parser')
const port = process.env.PORT || 8000
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const app = express();
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/anonymousNotes/dist/anonymousNotes'));

app.use(bodyParser.json())
// MODEL STUFF
mongoose.connect('mongodb://localhost/anonymousNotes');
mongoose.connection.on('connected', function(){
    console.log('connected to mongoDB')
})

const NoteSchema = new Schema ({
    note: {
    type: String,
    required: true,
    minlength: [2, "Note must be atleast 3 characters"],
    },
 }, {timestamps: true})

mongoose.model('Note', NoteSchema);
const Note = mongoose.model('Note')

// ROUTING SERVER SIDE
// get routes
app.get('/notes', function(req, res){
    Note.find({},function(err, notes){
        console.log(notes)
        if(err){
            console.log(err);
        } else {
            console.log("successfully grabbed notes", notes)
            res.json(notes)
        }
    })
})

// // post routes
// // grab data from message form
app.post('/processNote', function(req, res){
    console.log(req.body)
    const note = new Note({
        note: req.body.note
    })
    note.save(function(err){
        if(err){
            console.log(err)
            console.log("error in note save")
        } else {
            console.log("successful data save", req.body.note)
        }
    })
})

// SERVER LISTENER
app.listen(port, function(){
    console.log("listening on port", port)
})