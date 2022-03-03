'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('booked_rooms', [{
      books_id: 1,
      rooms_id: 1,
      quantity: 1,
      createdAt: '2022-03-03 10:00:00',
      updatedAt: '2022-03-03 10:00:00'
    }, {
      books_id: 1,
      rooms_id: 3,
      quantity: 1,
      createdAt: '2022-03-03 10:00:00',
      updatedAt: '2022-03-03 10:00:00'
    }, {
      books_id: 2,
      rooms_id: 1,
      quantity: 1,
      createdAt: '2022-03-03 10:00:00',
      updatedAt: '2022-03-03 10:00:00'
    }, {
      books_id: 3,
      rooms_id: 3,
      quantity: 1,
      createdAt: '2022-03-03 10:00:00',
      updatedAt: '2022-03-03 10:00:00'
    }, {
      books_id: 4,
      rooms_id: 3,
      quantity: 1,
      createdAt: '2022-03-03 10:00:00',
      updatedAt: '2022-03-03 10:00:00'
    }, {
      books_id: 5,
      rooms_id: 3,
      quantity: 1,
      createdAt: '2022-03-03 10:00:00',
      updatedAt: '2022-03-03 10:00:00'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('booked_rooms', null, {});
  }
};
