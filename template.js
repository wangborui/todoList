//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require('request');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, (req, res) => {
  console.log("Server is running on port: " + port);
});
