const DB = require("../../models");

const Books = DB.books;
const Rooms = DB.rooms;
const Booked_Rooms = DB.booked_rooms;
const Op = DB.Sequelize.Op;
const sequelize = require('sequelize');

// Retrieve all available rooms from the database
exports.findAll = async (req, res) => {
    try {
      Rooms.hasMany(Booked_Rooms, {foreignKey: 'rooms_id'})
      Booked_Rooms.belongsTo(Rooms, {foreignKey: 'rooms_id'})

      Books.hasMany(Booked_Rooms, {foreignKey: 'books_id'})
      Booked_Rooms.belongsTo(Books, {foreignKey: 'books_id'})
      
      var bookedRooms = await Booked_Rooms.findAll({
        attributes:['quantity', 'rooms_id'],
        include: [{
          model: Rooms,
          where: {status: 'active'},
          attributes:['status'],
          required: true,
        }, {
          model: Books,
          where: {
            from_date: {
              [Op.between]: [req.query.from_date, req.query.to_date],   
            },
            to_date: {
              [Op.between]: [req.query.from_date, req.query.to_date],   
            }
          },
          attributes:['status'],
          required: true,
        }]
      })

      // res.send(bookedRooms)

      var rooms_data = await Rooms.findAll({ where: {status: 'active'} })
      rooms_data = rooms_data.map(x => {
          let bookedRoomByType = bookedRooms.filter(function (br) {
            return br.rooms_id == x.id
          });
          x.dataValues.available = x.quantity
        if(bookedRooms.length > 0){
          let bookedQuantity = bookedRoomByType.reduce((sum, i) => sum + i.dataValues.quantity, 0)
          let available = x.quantity - bookedQuantity
          x.dataValues.available = available
        }
        return x
      })
      res.send(rooms_data);
    } catch (error) {
      res.status(500).send({
        message: error.message || "Some error occurred while retrieving rooms."
      });
    }
};

exports.booking = async (req, res) => {
  try {

    let booking_code = Array.from(Array(11), () => Math.floor(Math.random() * 36).toString(36)).join('').toUpperCase();

    const booking = await Books.create({
      booking_code: booking_code,
      customer_name: req.body.customer_name,
      customer_email: req.body.customer_email,
      from_date: req.body.from_date,
      to_date: req.body.to_date
    })

    let bookedRoomsData = req.body.booked_rooms.map(x => {
      x.books_id = booking.id
      return x
    })

    Booked_Rooms.bulkCreate(bookedRoomsData)

    res.send({
      message: 'success'
    })
    
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving rooms."
    });
  }
};

// cancelling booked room
exports.cancelled = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Books.update({
      status: 'cancelled'
    }, {
      where: { id: id }
    })

    if (data == 1) {
      res.send({
        message: 'success'
      })
    } else {
      res.status(404).send({
        message: `Cannot find books with id=` + id
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || "Could not delete book with id=" + id
    });
  }
};