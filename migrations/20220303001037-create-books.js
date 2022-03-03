'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('books', {
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
      room_id: {
        allowNull: false,
        type: Sequelize.INTEGER
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('books');
  }
};
