"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class sanPham extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    sanPham.init(
        {
            Tensp: DataTypes.STRING(30),
            Dongia: DataTypes.DOUBLE,
            Donviban: DataTypes.STRING(10),
            Dangbaoche: DataTypes.STRING(10),
            Quycach: DataTypes.STRING(20),
            Congdung: DataTypes.TEXT,
            Giakm: DataTypes.INTEGER,
            Soluongtk: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "sanPham",
        }
    );
    return sanPham;
};
