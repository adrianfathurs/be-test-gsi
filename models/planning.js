"use strict";

const { Model } = require("sequelize");
const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
    class Plannings extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        // define association here
        }
    }
    Plannings.init(
        {
          //
            kode: { type: DataTypes.STRING, allowNull: false, unique: true },
            qty_target: { type: DataTypes.INTEGER, allowNull: false },
            time_target: { type: DataTypes.FLOAT, allowNull: false },
            createdAt: { type: DataTypes.DATE },
            updatedAt: { type: DataTypes.DATE },
        },
        {
            hooks: {
                beforeCreate: (plannings, options) => {
                  plannings.createdAt = moment().format();
                  plannings.updatedAt = moment().format();
                },
                beforeUpdate: (plannings, options) => {
                  plannings.updatedAt = moment().format();
                },
            },
            timestamps: false,
            sequelize,
            underscored: true,
            modelName: "Plannings",
        }
    );
    return Plannings;
};
