const router = require("express").Router();
const path = require("path");

//Allows routing to specific html webpages
router.get("/", (req, res) => res.sendFile(path.join(__dirname, "../../public/index.html")));
router.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "../../public/notes.html")));
router.get("*", (req, res) => res.sendFile(path.join(__dirname, "../../public/index.html")));

module.exports = router;