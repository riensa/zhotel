require('express-group-routes');
const express = require('express');
const router = express.Router();// Import controller
const roomsController = require("../../controller/cms/rooms.controller.js");
const multer = require('multer');

// upload image
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/upload')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
var upload = multer({ storage: storage});

// Retrieve all rooms from the database
router.get("/", roomsController.findAll);

// form for new room
router.get('/new', (req, res, next) => {    
    res.render('rooms/form.pug', { title: 'Create Room'});
});

// Create and Save a new room
router.post('/new', upload.single('image'), roomsController.create);

// get room by id
router.get("/edit/:id", roomsController.findOne);

// Update a room by the id
router.post("/edit/:id", upload.single('image'), roomsController.update);

// Delete a room by id
router.get("/delete/:id", roomsController.delete);

module.exports = router;