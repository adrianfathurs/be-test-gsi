'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      npk: {
        allowNull: false,
        type: Sequelize.STRING
      },
      transaction_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      location: {
        allowNull: false,
        type: Sequelize.STRING
      },
      kode: {
        allowNull: false,
        type: Sequelize.STRING
      },
      qty_actual: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Transactions');
  }
};