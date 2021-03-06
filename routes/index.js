// routes/index.js
const express = require('express');
require('express-group-routes');

// Import routes
const cms = require('./cms');
const api = require('./api');

const router = express.Router();

router.use('/cms', cms);
router.use('/api', api);

module.exports = router;