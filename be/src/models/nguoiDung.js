"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class nguoiDung extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            nguoiDung.hasMany(models.donDatHang, { foreignKey: "Mand" });
            nguoiDung.belongsToMany(models.khuyenMai, { through: models.chiTietKhuyenMai,foreignKey:"Mand" });

        }
    }
    nguoiDung.init(
        {
            Holot: DataTypes.STRING(25),
            Ten: DataTypes.STRING(6),
            Gioitinh: DataTypes.STRING(4),
            Ngaysinh: DataTypes.DATEONLY,
            Sdt: DataTypes.STRING(12),
            Email: DataTypes.STRING(30),
            Phuong: DataTypes.STRING(20),
            Quan: DataTypes.STRING(20),
            Thanhpho: DataTypes.STRING(20),
            Tendangnhap: DataTypes.STRING(30),
            Matkhau: DataTypes.STRING,
            Loaind: DataTypes.STRING(1),
        },
        {
            sequelize,
            modelName: "nguoiDung",
        }
    );
    return nguoiDung;
};
