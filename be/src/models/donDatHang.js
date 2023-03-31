"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class donDatHang extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            donDatHang.belongsTo(models.nguoiDung, { foreignKey: "Mand" });
            donDatHang.belongsTo(models.khuyenMai, { foreignKey: "Makm" });
            // donDatHang.belongsToMany(models.sanPham, { through: models.chiTietDonHang, foreignKey: "Maddh" });
        }
    }
    donDatHang.init(
        {
            Ngaydathang: DataTypes.DATEONLY,
            Tongtien: DataTypes.DOUBLE,
            Pttt: DataTypes.STRING(20),
            Sdt: DataTypes.STRING(12),
            Phuong: DataTypes.STRING(20),
            Quan: DataTypes.STRING(20),
            Thanhpho: DataTypes.STRING(20),
            Ghichu: DataTypes.TEXT,
            Trangthai: DataTypes.BOOLEAN,
            Mand: DataTypes.STRING(8),
            Makm: DataTypes.STRING(8),
        },
        {
            sequelize,
            modelName: "donDatHang",
        }
    );
    return donDatHang;
};
