const DB = require("../../models");

const Rooms = DB.rooms;
const Op = DB.Sequelize.Op;

// Retrieve all rooms from the database
exports.findAll = async (req, res) => {
  try {
    const data = await Rooms.findAll({ where: {status: 'active'} })
    res.render("rooms/list.pug", {
      title: "Rooms",
      message: {
        button: 'success',
        label: 'Success! New Room Created'
      },
      data: data
    });
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving rooms."
    });
  }
};

// Create and Save a new room
exports.create = async (req, res) => {
  try {
    Rooms.create({
      type: req.body.type,
      description: req.body.description,
      quantity: req.body.quantity,
      price: req.body.price,
      image: req.file ? req.file.filename : null
    })
    
    res.render("response", {
      title: "Success",
      message: 'Success! New room created',
      route: "rooms",
      label: 'Rooms'
    });
    
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while creating rooms."
    });
  }
};

// get room by id
exports.findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Rooms.findOne({ 
      where: { id: id, status: 'active' },
    })
    if (data) {
      res.render("rooms/form.pug", {
        title: "Update Room",
        id: id,
        data: data
      });
    } else {
      res.status(404).send({
        message: `Cannot find room with id=${id}.`
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving room with id=" + id
    });
  }
};

// Update a room by the id
exports.update = async (req, res) => {
  const id = req.params.id;

  if(req.file){
    req.body.image = req.file.filename || ''
  }

  try {
    const data = await Rooms.update(req.body, {
      where: { id: id }
    })

    if (data == 1) {
      res.render("response", {
        title: "Success",
        message: 'room was updated successfully',
        route: "rooms",
        label: 'Rooms'
      });

    } else {
      res.render("response", {
        title: "Something went wrong",
        message: 'Cannot update room',
        route: "rooms",
        label: 'Rooms'
      });
    }
    
  } catch (error) {
    res.status(500).send({
      message: error.message || "Error updating Tutorial with id=" + id
    });
  }
};

// Delete a room by id
exports.delete = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Rooms.update({
      status: 'trash'
    }, {
      where: { id: id }
    })

    if (data == 1) {
      res.render("response", {
        title: "Success",
        message: 'room was deleted successfully',
        route: "rooms",
        label: 'Rooms'
      });
    } else {
      res.render("response", {
        title: "Something went wrong",
        message: 'Cannot delete room',
        route: "rooms",
        label: 'Rooms'
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || "Could not delete room with id=" + id
    });
  }
};