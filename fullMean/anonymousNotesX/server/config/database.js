const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const modelsPath = path.resolve('server', 'models');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/anonymousNotes');
mongoose.connection.on('connected', function(){
    console.log('connected to mongoDB')
})

fs.readdirSync(modelsPath).forEach(function(file){
    if(file.indexOf('.js') >= 0){
        require(modelsPath + '/' + file)
    }
})

