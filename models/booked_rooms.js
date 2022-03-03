module.exports = (sequelize, Sequelize) => {
    const Booked_Rooms = sequelize.define("booked_rooms", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        books_id: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        rooms_id: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        quantity: {
            allowNull: false,
            type: Sequelize.INTEGER
        }
    });
    return Booked_Rooms;
  };