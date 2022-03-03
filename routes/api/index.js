// routes/index.js
const express = require('express');
require('express-group-routes');

// Import routes
const books = require('./books');

const router = express.Router();

router.use('/books', books);

module.exports = router;