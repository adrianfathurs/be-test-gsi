"use strict";

const { Model } = require("sequelize");
const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
    class Karyawans extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        // define association here
        }
    }
    Karyawans.init(
        {

          //
            npk: { type: DataTypes.STRING, allowNull: false, unique: true },
            nama: { type: DataTypes.STRING, allowNull: false },
            alamat: { type: DataTypes.STRING, allowNull: false },
            createdAt: { type: DataTypes.DATE },
            updatedAt: { type: DataTypes.DATE },
        },
        {
            hooks: {
                beforeCreate: (karyawans, options) => {
                  karyawans.createdAt = moment().format();
                  karyawans.updatedAt = moment().format();
                },
                beforeUpdate: (karyawans, options) => {
                  karyawans.updatedAt = moment().format();
                },
            },
            timestamps: false,
            sequelize,
            underscored: true,
            modelName: "Karyawans",
        }
    );
    return Karyawans;
};
