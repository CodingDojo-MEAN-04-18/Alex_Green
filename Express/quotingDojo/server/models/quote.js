const mongoose = require("mongoose");
const { Schema } = mongoose;

// make a schema
// add validations
const quoteSchema = new Schema({
    name: {type: String, required: true, minlength: 2},
    quote: {type: String, required: true, minlength: 10},
}, {timestamps: true});

// make a model
mongoose.model('Quote', quoteSchema);
const Quote = mongoose.model('Quote');