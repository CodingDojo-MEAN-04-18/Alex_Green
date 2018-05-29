const Note = require('mongoose').model('Note');

module.exports = {
    index(req, res){
        Note.find({},function(err, notes){
            console.log(notes)
            if(err){
                console.log("error from notes.js",err);
            } else {
                console.log("successfully grabbed notes", notes)
                res.json(notes)
            }
        })
    },

    create(req, res){
        console.log(req.body)
        const note = new Note({
            note: req.body.note
        })
        note.save(function(err){
            if(err){
                console.log(err)
                console.log("error in note save")
            } else {
                console.log("successful data save", req.body.note)
                res.json("successful save")
            }
        })
    }
}