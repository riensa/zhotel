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
    await queryInterface.bulkInsert('books', [{
      booking_code: 'FOX76BWE0KU',
      customer_name: 'Reece Summers',
      customer_email: 'mollis@protonmail.ca',
      from_date: '2022-03-01',
      to_date: '2022-03-03',
      status: 'active',
      createdAt: '2022-03-03 07:30:00',
      updatedAt: '2022-03-03 07:30:00'
    }, {
      booking_code: 'QEA28XEO3EK',
      customer_name: 'Deacon Ryan',
      customer_email: 'ridiculus@outlook.couk',
      from_date: '2022-03-02',
      to_date: '2022-03-04',
      status: 'active',
      createdAt: '2022-03-03 07:30:00',
      updatedAt: '2022-03-03 07:30:00'
    }, {
      booking_code: 'PDA76COU4JY',
      customer_name: 'Ezra Cain',
      customer_email: 'metus.in@aol.org',
      from_date: '2022-03-03',
      to_date: '2022-03-04',
      status: 'active',
      createdAt: '2022-03-03 07:30:00',
      updatedAt: '2022-03-03 07:30:00'
    }, {
      booking_code: 'RFD61ABV5KI',
      customer_name: 'Dustin Miles',
      customer_email: 'cras.lorem@protonmail.net',
      from_date: '2022-03-05',
      to_date: '2022-03-07',
      status: 'active',
      createdAt: '2022-03-03 07:30:00',
      updatedAt: '2022-03-03 07:30:00'
    }, {
      booking_code: 'PGS35XEP4XK',
      customer_name: 'Deborah Beach',
      customer_email: 'non.dapibus@google.ca',
      from_date: '2022-03-02',
      to_date: '2022-03-03',
      status: 'active',
      createdAt: '2022-03-03 07:30:00',
      updatedAt: '2022-03-03 07:30:00'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('books', null, {});
  }
};
