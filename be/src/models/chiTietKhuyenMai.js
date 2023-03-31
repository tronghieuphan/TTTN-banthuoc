"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class chiTietKhuyenMai extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    chiTietKhuyenMai.init(
        {
            Makm: DataTypes.STRING(8),
            Mand: DataTypes.STRING(8),
        },
        {
            sequelize,
            modelName: "chiTietKhuyenMai",
        }
    );
    return chiTietKhuyenMai;
};
