"use strict";

const { Model } = require("sequelize");
const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
    class Achivements extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        // define association here
        }
    }
    Achivements.init(
        {

          //
            kode: { type: DataTypes.STRING, allowNull: false, unique: true },
            time_from: { type: DataTypes.TIME, allowNull: false },
            time_to: { type: DataTypes.TIME, allowNull: false },
            createdAt: { type: DataTypes.DATE },
            updatedAt: { type: DataTypes.DATE },
        },
        {
            hooks: {
                beforeCreate: (achivements, options) => {
                  achivements.createdAt = moment().format();
                  achivements.updatedAt = moment().format();
                },
                beforeUpdate: (achivements, options) => {
                  achivements.updatedAt = moment().format();
                },
            },
            timestamps: false,
            sequelize,
            underscored: true,
            modelName: "Achivements",
        }
    );
    return Achivements;
};
