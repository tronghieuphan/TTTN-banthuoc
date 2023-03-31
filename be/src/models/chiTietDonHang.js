"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class chiTietDonHang extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    chiTietDonHang.init(
        {
            Maddh: DataTypes.STRING(8),
            Masp: DataTypes.STRING(8),
            Soluong: DataTypes.INTEGER,
            Thanhtien: DataTypes.DOUBLE,
            Ngaydat: DataTypes.DATEONLY,
        },
        {
            sequelize,
            modelName: "chiTietDonHang",
        }
    );
    return chiTietDonHang;
};
