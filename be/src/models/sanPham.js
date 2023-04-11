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
            sanPham.belongsTo(models.xuatXu, { foreignKey: "Maxx" });
            sanPham.belongsTo(models.loaiSanPham, { foreignKey: "Maloai" });
            sanPham.belongsTo(models.thuongHieu, { foreignKey: "Math" });
            sanPham.belongsTo(models.nhaCungCap, { foreignKey: "Mancc" });
            sanPham.belongsToMany(models.donDatHang, { through: models.chiTietDonDatHang, foreignKey: "Masp" });
            sanPham.hasMany(models.hinhAnh, { foreignKey: "Masp" });
        }
    }
    sanPham.init(
        {
            Tensp: DataTypes.STRING(150),
            Dongia: DataTypes.INTEGER,
            Donviban: DataTypes.STRING(10),
            Dangbaoche: DataTypes.STRING(10),
            Quycach: DataTypes.STRING(20),
            Congdung: DataTypes.TEXT,
            Giakm: DataTypes.INTEGER,
            Soluongtk: DataTypes.INTEGER,
            Maloai: DataTypes.STRING(8),
            Maxx: DataTypes.STRING(8),
            Math: DataTypes.STRING(8),
            Mancc: DataTypes.STRING(8),
        },
        {
            sequelize,
            modelName: "sanPham",
        }
    );
    return sanPham;
};
