"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("khuyenMais", {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING(8),
            },

            Tenkm: {
                type: Sequelize.STRING(50),
            },
            Code: {
                type: Sequelize.STRING(10),
            },
            Phantram: {
                type: Sequelize.INTEGER,
            },
            Ngaybd: {
                type: Sequelize.DATEONLY,
            },
            Ngaykt: {
                type: Sequelize.DATEONLY,
            },
            Dieukhoan: {
                type: Sequelize.STRING(8),
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
        await queryInterface.dropTable("khuyenMais");
    },
};
