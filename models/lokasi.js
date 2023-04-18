"use strict";

const { Model } = require("sequelize");
const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
    class Lokasis extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        // define association here
        }
    }
    Lokasis.init(
        {

          //
            kode: { type: DataTypes.STRING, allowNull: false, unique: true },
            nama_lokasi: { type: DataTypes.STRING, allowNull: false },
            createdAt: { type: DataTypes.DATE },
            updatedAt: { type: DataTypes.DATE },
        },
        {
            hooks: {
                beforeCreate: (lokasis, options) => {
                  lokasis.createdAt = moment().format();
                  lokasis.updatedAt = moment().format();
                },
                beforeUpdate: (lokasis, options) => {
                  lokasis.updatedAt = moment().format();
                },
            },
            timestamps: false,
            sequelize,
            underscored: true,
            modelName: "Lokasis",
        }
    );
    return Lokasis;
};
