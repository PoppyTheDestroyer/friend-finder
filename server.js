/*jshint esversion: 6 */
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

app.post("/api/new", function(req, res) {
    var newUser = req.body;
    console.log(newUser);
});