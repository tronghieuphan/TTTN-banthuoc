"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("chiTietDonDatHangs", {
            Maddh: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING(8),
            },
            Masp: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING(8),
            },
            Soluong: {
                type: Sequelize.INTEGER,
            },
            Thanhtien: {
                type: Sequelize.INTEGER,
            },
            Ngaydat: {
                type: Sequelize.DATEONLY,
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
        await queryInterface.dropTable("chiTietDonDatHangs");
    },
};
