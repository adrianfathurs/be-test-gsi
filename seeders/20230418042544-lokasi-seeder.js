'use strict';
const moment = require("moment");
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Lokasis', [{
      id: 1,
      kode: 'M001',
      nama_lokasi: "Lokasi 1",
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Lokasis', null, {});
  }
};