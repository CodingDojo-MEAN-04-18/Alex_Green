const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
 
app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs')

app.get('/', function(request, response){
    response.render('index')
})

const server = app.listen(port, function(){
    console.log(`listening on port ${port}`)
});

const io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
    console.log('Client/socket is connected!');
    console.log('Client/socket id is: ' + socket.id)
    let count = 0
    socket.on("plus_one", function(){
        console.log("They clicked it!!");
        count += 1;
        console.log(count)
        socket.emit("update_count", {count: count})
    });
    socket.on("reset_count", function(){
        count = 0
        socket.emit("update_count", {count: count})
    })
})