const noteController = require('../controllers/notes');

module.exports = function(app){
    app.get('/notes', noteController.index);
    
    app.post('/processNote', noteController.create);
}