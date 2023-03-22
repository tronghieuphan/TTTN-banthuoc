"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("danhMucs", {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING(15),
            },

            Tendm: {
                type: Sequelize.STRING(30),
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
        await queryInterface.dropTable("danhMucs");
    },
};
