"use strict";

const { Model } = require("sequelize");
const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
    class Users extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        // define association here
        }
    }
    Users.init(
        {
            password: { type: DataTypes.STRING, allowNull: false },
            lastLogin: DataTypes.DATE,
            username: { type: DataTypes.STRING, allowNull: false, unique: true },
            createdAt: { type: DataTypes.DATE },
            updatedAt: { type: DataTypes.DATE },
        },
        {
            hooks: {
                beforeCreate: (users, options) => {
                users.createdAt = moment().format();
                users.updatedAt = moment().format();
                },
                beforeUpdate: (users, options) => {
                users.updatedAt = moment().format();
                },
            },
            timestamps: false,
            sequelize,
            underscored: true,
            modelName: "Users",
        }
    );
    return Users;
};
