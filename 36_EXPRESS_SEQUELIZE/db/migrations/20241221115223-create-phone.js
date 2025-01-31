'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('phones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      model: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: { min: 2000, max: new Date().getFullYear() },
      },
      ram: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: { isIn: [[4, 6, 8, 12, 16]] },
      },
      processor: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      screen_size: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: { min: 4.0 },
      },
      has_nfc: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      brand_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'brands',
          key: 'id',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('phones');
  },
};
