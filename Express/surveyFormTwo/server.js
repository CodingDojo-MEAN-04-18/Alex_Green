const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static(path.join(__dirname, "./static")));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

app.get('/', function(request, response){
    response.render("index")
})
app.post('/process', function(request, response){

    response.redirect("/")
})

const server = app.listen(8000, function(){
    console.log("listening on port 8000");
})

const io = require('socket.io').listen(server);

//EVERYTHING socket related goes here
io.sockets.on('connection', function(socket){ //this runs when client connects to server
    console.log('Client/socket is connected!');
    console.log('Client/socket id is: ' + socket.id);
    socket.on("posting_form", function(data){ 
        let number = Math.floor(Math.random() * 1000) + 1
        socket.emit('updated_message', {response: data});
        socket.emit('random_number', {response: number})
        
    })
})