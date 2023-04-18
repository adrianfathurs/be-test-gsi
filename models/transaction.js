"use strict";

const { Model } = require("sequelize");
const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
    class Transactions extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        // define association here
        }
    }
    Transactions.init(
        {
          //
            npk: { type: DataTypes.STRING, allowNull: false },
            transaction_date: { type: DataTypes.DATE, allowNull: false },
            location: { type: DataTypes.STRING, allowNull: false },
            kode: { type: DataTypes.STRING, allowNull: false },
            qty_actual: { type: DataTypes.INTEGER, allowNull: false },
            createdAt: { type: DataTypes.DATE },
            updatedAt: { type: DataTypes.DATE },
        },
        {
            hooks: {
                beforeCreate: (transactions, options) => {
                  transactions.createdAt = moment().format();
                  transactions.updatedAt = moment().format();
                },
                beforeUpdate: (transactions, options) => {
                  transactions.updatedAt = moment().format();
                },
            },
            timestamps: false,
            sequelize,
            underscored: true,
            modelName: "Transactions",
        }
    );
    return Transactions;
};
