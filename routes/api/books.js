require('express-group-routes');
const express = require('express');
const router = express.Router();
const booksController = require("../../controller/api/books.controller.js");
const booksValidator = require('../../middlewares/validators/booksValidator');


// Retrieve all rooms from the database
router.get("/", booksController.findAll);

// booking multiple rooms
router.post("/", booksValidator.validateBooking, booksController.booking);

// cancelling booked room
router.delete("/:id", booksController.cancelled);

module.exports = router;