const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:qnZTnA7rsqObJyLA@cluster0-hdooz.mongodb.net/its-ability?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'INFO: Connection error:'));
db.once('open', function() {
  console.log("INFO: Connected to server.")
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS, PUT"
  );
  next();
});


module.exports = app;
