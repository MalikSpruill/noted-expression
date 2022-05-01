const router = require("express").Router();
const fs = require("fs");
const path = require("path");
let noteData = require("../../db/db.json");
const uuid = require("uuid");

//reads db.json file and returns saved notes as JSON
router.get("/notes", (req, res) => {
    res.json(noteData);
})

// allows for new notes to be posted in the left saved notes column and saved in db.json file
router.post("/notes", (req, res) => {
    if (!req.body) {
        return res.sendStatus(400);
    }

    req.body.id = uuid.v4();
    noteData.push(req.body);
    fs.writeFileSync(path.join(__dirname, "../../db/db.json"), JSON.stringify(noteData, null, 2));
    res.json(req.body);
});

// allows for notes to be deleted in both the saved notes column and the db.json file
router.delete("/notes/:id", (req, res) => {
    let deletedNote = noteData.some(note => note.id === req.params.id);

    if (deletedNote) {
        noteData = noteData.filter(note => note.id !== req.params.id)
    } else {
        res.sendStatus(400);
    }
    fs.writeFileSync(path.join(__dirname, "../../db/db.json"), JSON.stringify(noteData, null, 2));
    res.json(noteData);
})

module.exports = router;