const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const noteData = require("../../db/db.json");
const uuid = require("uuid");

router.get("/", (req, res) => {
    res.json(noteData);
})

//reads db.json file and returns saved notes as JSON
router.get("/notes", (req,res) => {
    res.json(noteData);
    
})

// allows for new notes to be posted in the left saved notes column and saved in db.json file
router.post("/notes", (req, res) => {
    if (!req.body) {
        return res.sendStatus(400);
    }
    console.log(req.body);
    req.body.id = uuid.v4();
    noteData.push(req.body);
    fs.writeFileSync(path.join(__dirname, "../../db/db.json"), JSON.stringify(noteData, null, 2));
    res.json(req.body);
});

module.exports = router;