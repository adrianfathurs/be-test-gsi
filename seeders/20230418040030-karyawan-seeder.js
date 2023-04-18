'use strict';
const moment = require("moment");
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Karyawans', [{
      id: 1,
      npk: '10001',
      nama: 'Agus',
      alamat: "Jakarta",
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Karyawans', null, {});
  }
};