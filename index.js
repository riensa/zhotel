const express = require("express");
const expressValidator = require('express-validator')
const cors = require("cors");

const app = express();

// CORS
var corsOptions = {
  origin: "http://localhost:8082"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to zhotel." });
});

// routing
// const routes = require('./route')
// app.use(routes) 

// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});