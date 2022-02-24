const router = require('express').Router();

const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

router.get('/notes', (req, res) => {
    let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    return res.json(notes);
});

router.post('/notes', (req,res) => {
    let newNote = req.body;
    newNote.id = uuidv4();

    let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    notes.push(newNote);

    fs.writeFileSync('./db/db.json', JSON.stringify(notes));

    return res.json(notes);
});


module.exports = router;