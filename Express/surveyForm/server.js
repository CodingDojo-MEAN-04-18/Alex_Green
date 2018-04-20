const express = require("express");
const path = require("path");
const session = require("express-session")
const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({ secret: 'supersecretstuff'}))

app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

app.get('/', function(request, response){
    response.render("index")
})

app.post('/results', function(request, response){
    console.log(request.body)
    response.render('results', {person: request.body})
})

// app.get('/results', function(request, response){
//     response.render("results")
// });

app.listen(8000, function(){
    console.log("server listening on port 8000")
})