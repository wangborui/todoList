//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require('request');
const date = require(__dirname + "/date.js");

const app = express();
const port = 3000;

var newItems = ["Buy Food", "Cook Food"];
var workItems = [];

//assuming views folder
//https://github.com/mde/ejs/wiki/Using-EJS-with-Express
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get('/', (req, res) => {
  var day = date.getDate();

  res.render('index', {day: day, newItems: newItems});
});

app.get('/work', (req, res) => {
  res.render('index', {day: "Work", newItems: workItems});
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.post("/", (req, res) => {
  var newItem = req.body.newItem;
  var buttonType = req.body.button;
  if(buttonType === "Work") {
    workItems.push(newItem);
    res.redirect("/work");
  } else {
    newItems.push(newItem);
    res.redirect("/");
  }
});

app.listen(port, (req, res) => {
  console.log("Server is running on port: " + port);
});
