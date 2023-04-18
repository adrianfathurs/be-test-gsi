'use strict';
const moment = require("moment");
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Plannings', [{
      id: 1,
      kode: 'M001',
      qty_target: 10,
      time_target: 20,
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Plannings', null, {});
  }
};