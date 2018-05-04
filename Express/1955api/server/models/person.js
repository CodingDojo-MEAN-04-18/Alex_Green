const mongoose = require("mongoose");
const { Schema } = mongoose;

//make schema
const PersonSchema = new Schema({
    name: {
        type: String,
        required: true,
    }
}, {timestamps: true})

//make models
const Person = mongoose.model('Person', PersonSchema)