"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class thuongHieu extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            thuongHieu.hasMany(models.sanPham, { foreignKey: "Math" });
        }
    }
    thuongHieu.init(
        {
            Tenth: DataTypes.STRING(25),
            Hinhanh: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: "thuongHieu",
        }
    );
    return thuongHieu;
};
