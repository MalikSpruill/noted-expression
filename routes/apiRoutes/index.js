const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const noteData = require("../../db/db.json");

router.get("/", (req, res) => {
    res.json(noteData);
})

router.post("/", (req, res) => {
    if (!req.body) {
        return res.sendStatus(400);
    }
    console.log(req.body);
    notes.push(req.body);
    fs.writeFileSync(path.join(__dirname, "../../db/db.json"), JSON.stringify(notes, null, 2));
    res.json(req.body);
});

module.exports = router;