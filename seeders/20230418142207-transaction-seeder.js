'use strict';
const moment = require("moment");
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Transactions', [{
      id: 1,
      npk: '1001',
      transaction_date: new Date(),
      location: "L001",
      kode: "M001",
      qty_actual: 10,
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Transactions', null, {});
  }
};