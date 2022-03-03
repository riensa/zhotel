'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.removeColumn('books', 'room_id');
     await queryInterface.removeColumn('books', 'quantity');
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.addColumn('books', 'room_id', {
      allowNull: false,
      type: Sequelize.INTEGER
    });

    await queryInterface.addColumn('books', 'quantity', {
      allowNull: false,
      type: Sequelize.INTEGER
    });
  }
};
