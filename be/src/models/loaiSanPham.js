"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class loaiSanPham extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    loaiSanPham.init(
        {
            Tenloai: DataTypes.STRING(20),
        },
        {
            sequelize,
            modelName: "loaiSanPham",
        }
    );
    return loaiSanPham;
};
