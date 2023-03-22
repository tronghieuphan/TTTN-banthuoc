"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class nhaCungCap extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    nhaCungCap.init(
        {
            Tenncc: DataTypes.STRING(20),
            Email: DataTypes.STRING(30),
            Sdt: DataTypes.STRING(12),
            Phuong: DataTypes.STRING(20),
            Quan: DataTypes.STRING(20),
            Thanhpho: DataTypes.STRING(20),
        },
        {
            sequelize,
            modelName: "nhaCungCap",
        }
    );
    return nhaCungCap;
};
