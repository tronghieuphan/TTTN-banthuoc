"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("sanPhams", {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING(8),
            },

            Tensp: {
                type: Sequelize.STRING(30),
            },
            Dongia: {
                type: Sequelize.DOUBLE,
            },
            Donviban: {
                type: Sequelize.STRING(10),
            },
            Dangbaoche: {
                type: Sequelize.STRING(10),
            },
            Quycach: {
                type: Sequelize.STRING(20),
            },
            Congdung: {
                type: Sequelize.TEXT,
            },
            Giakm: {
                type: Sequelize.INTEGER,
            },
            Soluongtk: {
                type: Sequelize.INTEGER,
            },
            Maloai: {
                type: Sequelize.STRING(8),
            },
            Maxx: {
                type: Sequelize.STRING(8),
            },
            Math: {
                type: Sequelize.STRING(8),
            },
            Mancc: {
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
        await queryInterface.dropTable("sanPhams");
    },
};
