const express = require('express');
const router = express.Router();// Import controller
const rooms = require("../controller/cms/rooms.controller.js");
const roomsValidator = require('../middlewares/validators/roomsValidator');

// Retrieve all rooms from the database
router.get("/", rooms.findAll);

// Create and Save a new room
router.post("/", roomsValidator.validateRoom,rooms.create);

// get room by id
router.get("/:id", rooms.findOne);

// Update a room by the id
router.put("/:id", roomsValidator.validateRoom, rooms.update);

// Delete a room by id
router.delete("/:id", rooms.delete);

module.exports = router;