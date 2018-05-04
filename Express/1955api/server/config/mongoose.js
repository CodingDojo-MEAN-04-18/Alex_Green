const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/1955api');
mongoose.connection.on('connected', function(){
    console.log('connected to mongodb')
})