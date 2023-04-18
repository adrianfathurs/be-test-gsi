'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Achivements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kode: {
        uniqe:true,
        allowNull: false,
        type: Sequelize.STRING
      },
      time_from: {
        allowNull: false,
        type: Sequelize.TIME
      },
      time_to: {
        allowNull: false,
        type: Sequelize.TIME
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
    await queryInterface.dropTable('Achivements');
  }
};