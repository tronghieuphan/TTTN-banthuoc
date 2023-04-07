"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("nhaCungCaps", {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING(8),
            },

            Tenncc: {
                type: Sequelize.STRING(150),
            },
            Email: {
                type: Sequelize.STRING(30),
            },
            Sdt: {
                type: Sequelize.STRING(12),
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
        await queryInterface.dropTable("nhaCungCaps");
    },
};
