const bodyParser = require('body-parser')
const port = process.env.PORT || 8000
// const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const app = express();
// const { Schema } = mongoose;
// mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/anonymousNotes/dist/anonymousNotes'));

app.use(bodyParser.json())

require('./server/config/database');
require('./server/config/routes')(app);
// MODEL STUFF


// ROUTING SERVER SIDE
// get routes


// SERVER LISTENER
app.listen(port, function(){
    console.log("listening on port", port)
})