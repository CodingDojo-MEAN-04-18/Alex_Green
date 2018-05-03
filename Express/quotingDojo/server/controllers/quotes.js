const mongoose = require("mongoose");
const Quote = mongoose.model("Quote");

module.exports = {

    index: function(req, res) {
        res.render('index');
    },
    
    getQuotes: function(req, res){
        Quote.find({}, function(err, quotes){
            if(err){
                console.log("trouble finding quotes")
                res.redirect("/")
            } else {
                res.render('quotes', {quotes: quotes});
            }
        })
    },
    
    // save form entry
    processQuotes: function(req, res){
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
    }
    








}