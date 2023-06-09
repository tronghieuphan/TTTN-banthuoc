"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class hinhAnh extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            hinhAnh.belongsTo(models.sanPham, { foreignKey: "Masp" });
        }
    }
    hinhAnh.init(
        {
            Url: DataTypes.TEXT,
            Masp: DataTypes.STRING(8),
        },
        {
            sequelize,
            modelName: "hinhAnh",
        }
    );
    return hinhAnh;
};
