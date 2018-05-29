const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema ({
    note: {
    type: String,
    required: true,
    minlength: [2, "Note must be atleast 3 characters"],
    },
 }, {timestamps: true})

 module.exports = mongoose.model('Note', NoteSchema)
// mongoose.model('Note', NoteSchema);
// const Note = mongoose.model('Note')
