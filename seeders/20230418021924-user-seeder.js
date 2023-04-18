'use strict';
const moment = require("moment");
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id: 1,
      username: 'admin@admin.com',
      password: bcrypt.hashSync("admin", 8),
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};