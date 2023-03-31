"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class danhMuc extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            danhMuc.hasMany(models.loaiSanPham, { foreignKey: "Madm" });
        }
    }
    danhMuc.init(
        {
            Tendm: DataTypes.STRING(30),
        },
        {
            sequelize,
            modelName: "danhMuc",
        }
    );
    return danhMuc;
};
