require('express-group-routes');
const express = require('express');
const router = express.Router(); // Import controller

// dashboard page
router.get('/', (req, res, next) => {    
    res.render('dashboard.pug', { title: 'Dashboard'});
});

module.exports = router;