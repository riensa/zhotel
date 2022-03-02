// routes/index.js
const express = require('express');

// Import routes
const rooms = require('../route/rooms');

const router = express.Router();

router.use('/api/rooms', rooms);

module.exports = router;