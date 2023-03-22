"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("donDatHangs", {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING(15),
            },

            Ngaydathang: {
                type: Sequelize.DATEONLY,
            },
            Tongtien: {
                type: Sequelize.DOUBLE,
            },
            Pttt: {
                type: Sequelize.STRING(20),
            },
            Sdt: {
                type: Sequelize.STRING(12),
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
            Trangthai: {
                type: Sequelize.BOOLEAN,
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
