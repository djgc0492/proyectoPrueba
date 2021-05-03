const express = require("express");
const  app = express();
const puerto = 3000;


app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");





