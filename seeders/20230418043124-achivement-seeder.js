'use strict';
const moment = require("moment");
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Achivements', [{
      id: 1,
      kode: 'A001',
      time_from: moment().format('HH:mm'),
      time_to: moment().format('HH:mm'),
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Achivements', null, {});
  }
};