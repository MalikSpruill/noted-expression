const express = require("express");
const app = express();
const PORT = process.env.PORT || 3005;
const fs = require("fs");
const path = require("path");
const notes = require("./db/db");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "./public/index.html")));

app.post("/", (req, res) => {
    if (!req.body) {
        return res.sendStatus(400);
    }
    console.log(req.body);
    notes.push(req.body);
    fs.writeFileSync(path.join(__dirname, "./db/db.json"), JSON.stringify(notes, null, 2));
    res.json(req.body);
});

app.listen(PORT, () => console.log("The server has started"));


