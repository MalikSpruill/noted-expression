const express = require("express");
const app = express();
const PORT = process.env.PORT || 3005;
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const fs = require("fs");
const path = require("path");
const notes = require("./db/db");

app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use(express.static("public")); 
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


app.listen(PORT, () => console.log("The server has started"));

