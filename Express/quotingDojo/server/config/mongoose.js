const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/quotingDojo')
mongoose.connection.on('connected', function(){
    console.log('connected to mongodb')
})