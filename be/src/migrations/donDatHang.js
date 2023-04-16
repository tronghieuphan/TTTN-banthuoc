"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("donDatHangs", {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING(8),
            },

            Ngaydathang: {
                type: Sequelize.DATEONLY,
            },
            Tongtien: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            Pttt: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            Sdt: {
                type: Sequelize.STRING(12),
                allowNull: false,
            },
            Phuong: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            Quan: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            Thanhpho: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            Sonha:{
                type:Sequelize.STRING(50),
                allowNull:false
            },
            Ghichu: {
                type: Sequelize.TEXT,
            },
            Trangthai: {
                type: Sequelize.BOOLEAN,
            },
            Mand: {
                type: Sequelize.STRING(8),
            },
            Makm: {
                type: Sequelize.STRING(8),
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
        await queryInterface.dropTable("donDatHangs");
    },
};
