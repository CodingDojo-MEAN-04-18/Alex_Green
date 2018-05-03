const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');
const quotes = require("./../controllers/quotes")

// export all routes as a function
module.exports = function(app){

app.get('/', function(req, res){
    quotes.index(req, res);
});

app.get('/quotes', function(req, res){
    quotes.getQuotes(req,res)
})

// save form entry
app.post('/process', function(req, res){
    quotes.processQuotes(req, res)
})

}