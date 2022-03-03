module.exports = (sequelize, Sequelize) => {
    const Rooms = sequelize.define("rooms", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        type: {
            allowNull: false,
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT
        },
        image: {
            type: Sequelize.TEXT
        },
        quantity: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        price: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        status: {
            allowNull: false,
            type: Sequelize.ENUM,
            values: ['active', 'trash'],
            defaultValue: 'active'
        }
    });
    return Rooms;
  };