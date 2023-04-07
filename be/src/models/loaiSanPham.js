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
            loaiSanPham.belongsTo(models.danhMuc, { foreignKey: "Madm" });
            loaiSanPham.hasMany(models.sanPham, { foreignKey: "Maloai" });
        }
    }
    loaiSanPham.init(
        {
            Tenloai: DataTypes.STRING(50),
            Madm: DataTypes.STRING(8),
        },
        {
            sequelize,
            modelName: "loaiSanPham",
        }
    );
    return loaiSanPham;
};
