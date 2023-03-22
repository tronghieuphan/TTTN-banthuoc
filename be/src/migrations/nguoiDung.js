"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("nguoiDungs", {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING(15),
            },

            Holot: {
                type: Sequelize.STRING(25),
                allowNull: false,
            },
            Ten: {
                type: Sequelize.STRING(6),
                allowNull: false,
            },
            Gioitinh: {
                type: Sequelize.STRING(4),
            },
            Ngaysinh: {
                type: Sequelize.DATEONLY,
            },
            Sdt: {
                type: Sequelize.STRING(12),
                allowNull: false,
                unique: true,
            },
            Email: {
                type: Sequelize.STRING(30),
                allowNull: false,
                unique: true,
            },
            Phuong: {
                type: Sequelize.STRING(20),
            },
            Quan: {
                type: Sequelize.STRING(20),
            },
            Thanhpho: {
                type: Sequelize.STRING(20),
            },
            Tendangnhap: {
                type: Sequelize.STRING(30),
                allowNull: false,
                unique: true,
            },
            Matkhau: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            Loaind: {
                type: Sequelize.STRING(1),
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("nguoiDungs");
    },
};
