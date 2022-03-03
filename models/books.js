module.exports = (sequelize, Sequelize) => {
    const Books = sequelize.define("books", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        booking_code: {
            allowNull: false,
            type: Sequelize.STRING
        },
        customer_name: {
            allowNull: false,
            type: Sequelize.STRING
        },
        customer_email: {
            allowNull: false,
            type: Sequelize.STRING
        },
        from_date: {
            allowNull: false,
            type: Sequelize.DATE
        },
        to_date: {
            allowNull: false,
            type: Sequelize.DATE
        },
        status: {
            type: Sequelize.ENUM,
            values: ['active', 'cancelled'],
            defaultValue: 'active',
            allowNull: false
        }
    });
    return Books;
  };