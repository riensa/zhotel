'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn('books', 'from_date', {
      allowNull: false,
      type: Sequelize.DATEONLY
    });

    await queryInterface.changeColumn('books', 'to_date', {
      allowNull: false,
      type: Sequelize.DATEONLY
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

     await queryInterface.changeColumn('books', 'from_date', {
      allowNull: false,
      type: Sequelize.DATE
    });

    await queryInterface.changeColumn('books', 'to_date', {
      allowNull: false,
      type: Sequelize.DATE
    });
  }
};
