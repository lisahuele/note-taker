const router = require('express').Router();
const fs = require('fs');
let db = require('../../db/db.json');

// GET - request data from '/notes' and respond in JSON
router.get('/notes', (req, res) => {
    db = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'))

    res.json(db);
});

// POST - send data to server
router.post('/notes', (req, res) => {
    let newNote = {
        id: db.length.toString(),
        title: req.body.title,
        text: req.body.text
    }

    db.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(db), (err, res) => {
    if(err) throw err;
    });

    res.json(db);
});

//BONUS: Delete requests
router.delete('/notes/:id', (req, res) => {
    let db = require('../../db/db.json');
    let savedNotes = [];

    for(let i = 0; i < db.length; i++) {
        if(parseInt(db[i].id) !== parseInt(req.params.id)) {
            savedNotes.push(db[i]);
        }
    }

    db = savedNotes;
    fs.writeFileSync('./db/db.json', JSON.stringify(db), (err, res) => {
        if(err) throw err;
    });

    res.json(db);

});

module.exports = router;