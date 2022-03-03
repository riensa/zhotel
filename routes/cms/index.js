// routes/index.js
const express = require('express');
require('express-group-routes');

// Import routes
const dashboard = require('./dashboard');
const rooms = require('./rooms');

const router = express.Router();

router.use('/', dashboard);
router.use('/rooms', rooms);

module.exports = router;