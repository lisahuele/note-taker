const router = require('express').Router();
const { notStrictEqual } = require('assert');
const fs = require('fs');
let db = require('../db/db.json');

// GET - request data from '/notes' and respond in JSON
router.get('/notes', (req, res) => {
    db = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'))

    res.json(db);
});

// POST - send data to server
router.post('/notes', (req, res) => {
    let newNote = {
        id: notes.lengthtoString(),
        title: req.body.title,
        text: req.body.text
    }

    db.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(db), (err, res) => {
    if(err) throw err;
    });

    res.json(db);
});

module.exports = router;