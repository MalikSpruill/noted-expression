const express = require("express");
const app = express();
const PORT = process.env.PORT || 3005;
const notes = require("./db/db");

app.get("/", (req, res) => res.json(notes));

app.listen(PORT, () => console.log("The server has started"));