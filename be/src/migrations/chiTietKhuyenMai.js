"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("chiTietKhuyenMais", {
            Makm: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING(8),
            },
            Mand: {
                allowNull: false,
                primaryKey: true,
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
        await queryInterface.dropTable("chiTietKhuyenMais");
    },
};
