const mongoose = require("mongoose");
const Person = mongoose.model("Person");

module.exports = function(app){

app.get('/', function(req, res){
    Person.find({}, function(err, people){
        if(err){
            console.log(err)
            res.send(err)
        } else {
            console.log("GREAT SUCCESS")
            res.json({people})
        }
    })
})

app.get('/new/:name/', function(req, res){
    const person = new Person({
        name: req.params.name
    })
    person.save(function(err){
        if(err){
            console.log(err)
            res.send(err)
        } else {
            console.log(person)
            res.send(person)
        }
    })
})

app.get('/:name/', function(req, res){
    Person.findOne({name: req.params.name}, function(err, person){
        if(err){
            console.log(err)
            res.send(err)
        } else {
            console.log("found the dude")
            res.json({person})
        }
    })
})

app.get('/remove/:name/', function(req, res){
    Person.findOneAndRemove({name: req.params.name}, function(err, success){
        if(err){
            console.log(err);
            res.send("could not delete that dude")
        } else {
            console.log("dude deleted")
            res.send(`deleted ${req.params.name}`)
        }
    })
})
} //end export function