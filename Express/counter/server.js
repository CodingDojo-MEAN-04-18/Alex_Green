const express = require("express");
const path = require("path");
const session = require("express-session")
const app = express();
const bodyParser = require("body-parser");
let count = 0

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({secret: 'supersecretpass'}));

app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

app.get('/', function(request, response){
    count += 1
    request.session.counter = count
    response.render("counter", { counter: request.session.counter});
})

app.get('/reset', function(request, response){
    count = 0
    console.log("hitting reset route")
    response.redirect('/')
})

app.get('/plusTwo', function(request, response){
    count +=1
    response.redirect('/')
})

app.listen(8000, function(){
    console.log("listening on port 8000")
})
