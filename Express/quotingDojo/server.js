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


// mongoose.connect('mongodb://localhost/quotingDojo')
// mongoose.connection.on('connected', function(){
//     console.log('connected to mongodb')
// })
require('./server/config/mongoose.js')

// require models/schemas
require('./server/models/quote.js')
// require routes from routes.js
require('./server/config/routes.js')(app);


app.listen(port, function(){
    console.log(`listening on port: ${port}`)
});