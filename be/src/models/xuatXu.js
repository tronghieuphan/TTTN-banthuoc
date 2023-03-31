"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class xuatXu extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            xuatXu.hasMany(models.sanPham, { foreignKey: "Maxx" });
        }
    }
    xuatXu.init(
        {
            Tenxx: DataTypes.STRING(25),
        },
        {
            sequelize,
            modelName: "xuatXu",
        }
    );
    return xuatXu;
};
