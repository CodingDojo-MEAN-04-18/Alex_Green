const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
const app = express();
const mongoose = require("mongoose")
const { Schema } = mongoose;
mongoose.Promise = global.Promise

app.use(bodyParser.urlencoded ({ extender: true }));

app.set('views',path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
});

app.get('/quotes', function(req, res){
    Quote.find({}, function(err, quotes){
        if(err){
            console.log("trouble finding quotes")
            res.redirect("/")
        } else {
            res.render('quotes', {quotes: quotes});
        }
    })
})

// save form entry
app.post('/process', function(req, res){
    const quote = new Quote({
        name: req.body.name,
        quote: req.body.quote,
    })

    quote.save(function(err){
        if(err){
            //do error stuff
            console.log(err)
            res.render('index', {errors: quote.errors})
        } else {
            console.log("success", req.body.name, req.body.quote)
            res.redirect('/quotes')
        }
    })
})

mongoose.connect('mongodb://localhost/quotingDojo')
// make a schema
// add validations
const quoteSchema = new Schema({
    name: {type: String, required: true, minlength: 2},
    quote: {type: String, required: true, minlength: 10},
}, {timestamps: true});

// make a model
mongoose.model('Quote', quoteSchema);
const Quote = mongoose.model('Quote');

app.listen(port, function(){
    console.log(`listening on port: ${port}`)
});