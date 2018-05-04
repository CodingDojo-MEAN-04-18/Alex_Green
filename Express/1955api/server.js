const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
const mongoose = require("mongoose");

app.use(bodyParser.json());

require('./server/config/mongoose.js')
// require models/schemas
require('./server/models/person.js')
// require routes from routes.js
require('./server/config/routes.js')(app);

app.listen(port, function(){
    console.log("listening on port:", port)
})