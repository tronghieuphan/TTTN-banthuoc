"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class khuyenMai extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            khuyenMai.hasMany(models.donDatHang, { foreignKey: "Makm" });
            khuyenMai.belongsToMany(models.nguoiDung, {
                through: models.chiTietKhuyenMai,
                foreignKey: "Makm",
            });
        }
    }
    khuyenMai.init(
        {
            Tenkm: DataTypes.STRING(50),
            Code: DataTypes.STRING(10),
            Phantram: DataTypes.INTEGER,
            Ngaybd: DataTypes.DATEONLY,
            Ngaykt: DataTypes.DATEONLY,
            Dieukhoan: DataTypes.INTEGER,
            Trangthai: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: "khuyenMai",
        }
    );
    return khuyenMai;
};
