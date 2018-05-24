//config
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const { Schema } = mongoose;
const app = express();
mongoose.Promise = global.Promise;

app.use(express.static(__dirname + '/appTeamManager/dist/appTeamManager'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//DB stuff
mongoose.connect('mongodb://localhost/teamManager');
mongoose.connection.on('connected', function(){
    console.log('connected to MongoDB')
})

//schema
const PlayerSchema = new Schema ({
    name: {
        type: String,
        required: true,
        minlength: [3, "name must be atleast 3 characters"]
    },
    position: {
        type: String
    },
    gameOne: {
        type: String,
        default: 'undecided'
    },
    gameTwo: {
        type: String,
        default: 'undecided'
    },
    gameThree: {
        type: String,
        default: 'undecided'
    },
}, {timestamps: true})

//model
mongoose.model('Player', PlayerSchema);
const Player = mongoose.model('Player');

//routing
//get all players
app.get('/allPlayers', function(req, res){
    Player.find({}, function(err, players){
        console.log(players)
        if(err){
            console.log("ERROR IN GET ALLPLAYERS SERVER.JS", err);
        } else {
            console.log("successfully retrieved players")
            res.json(players)
        }
    })
})
// posts
// add new player
app.post('/processPlayer', function(req, res){
    console.log("processing add player" ,req.body)
    const player = new Player({
        name: req.body.name,
        position: req.body.position
    })
    player.save(function(err){
        if(err){
            console.log("error while saving new player", err)
            res.json(err)
        } else {
            console.log("successful player save")
            res.json({message: "successful player save json"})
        }
    })
})

app.delete('/deletePlayer/:id', function(req, res){
    console.log("deleting", req.body.name)
    Player.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log("error in deletion")
        } else {
            console.log("deleted successfully")
            res.json({message: "successful player delete json"})
        }
    })
})

app.put('/editPlayer/:id/:game/:status', function(req, res){
    console.log("editing", req.params.id, req.params.status)
    Player.findOneAndUpdate({_id: req.params.id},{[req.params.game]: req.params.status}, function(err){
        if(err){
            console.log("error in edit to playing", err)
        } else {
            console.log("successfull edit")
            res.json({message: "successful edit json"})
        }
    })
})

// listener
app.listen(port, () => {
    console.log(`express listening on port: ${port}`)
})