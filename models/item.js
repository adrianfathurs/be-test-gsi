"use strict";

const { Model } = require("sequelize");
const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
    class Items extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        // define association here
        }
    }
    Items.init(
        {

          //
            kode: { type: DataTypes.STRING, allowNull: false, unique: true },
            nama_item: { type: DataTypes.STRING, allowNull: false },
            createdAt: { type: DataTypes.DATE },
            updatedAt: { type: DataTypes.DATE },
        },
        {
            hooks: {
                beforeCreate: (items, options) => {
                  items.createdAt = moment().format();
                  items.updatedAt = moment().format();
                },
                beforeUpdate: (items, options) => {
                  items.updatedAt = moment().format();
                },
            },
            timestamps: false,
            sequelize,
            underscored: true,
            modelName: "Items",
        }
    );
    return Items;
};
