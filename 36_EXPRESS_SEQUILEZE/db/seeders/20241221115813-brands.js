'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('brands', [
      { name: 'Apple', created_at: new Date(), updated_at: new Date() },
      { name: 'Samsung', created_at: new Date(), updated_at: new Date() },
      { name: 'Google', created_at: new Date(), updated_at: new Date() },
      { name: 'Sony', created_at: new Date(), updated_at: new Date() },
      { name: 'Nokia', created_at: new Date(), updated_at: new Date() },
      { name: 'Motorola', created_at: new Date(), updated_at: new Date() },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('brands', null, {});
  },
};
