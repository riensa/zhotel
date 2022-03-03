const express = require("express");
const expressValidator = require('express-validator')
const cors = require("cors");

const app = express();

// CORS
var corsOptions = {
  origin: "http://localhost:8082"
};

app.use(cors(corsOptions));

// Sequelize
// const db = require("../zhotel/models");
// db.sequelize.sync(); // uncomment if need to always check wheter table is already exist or not


// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to zhotel." });
});

// routing
const routes = require('./routes')
app.use(routes) 

// html view
app.set('views', __dirname + '/views')
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});