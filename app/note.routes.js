
const notes = require('./note.controller');
var express = require('express');
const router = express.Router();
router.get('/notes', notes.getData);
function setRoutes(){
    
}
module.exports = router;

//module.exports = (app) => {
//
//    // Create a new Note
//    app.post('/notes', notes.create);
//
//    // Retrieve all Notes
//    app.get('/notes', notes.getData);
//
//    // Retrieve a single Note with noteId
//    app.get('/notes/:noteId', notes.findOne);
//
//    // Update a Note with noteId
//    app.put('/notes/:noteId', notes.update);
//
//    // Delete a Note with noteId
//    app.delete('/notes/:noteId', notes.delete);
//}