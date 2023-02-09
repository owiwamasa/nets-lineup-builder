"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Lineups", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      lineup_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      efg_pct: {
        type: Sequelize.FLOAT(1),
        allowNull: false,
      },
      fg_pct: {
        type: Sequelize.FLOAT(1),
        allowNull: false,
      },
      three_pt_pct: {
        type: Sequelize.FLOAT(1),
        allowNull: false,
      },
      off_rating: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      def_rating: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ast_per_100: {
        type: Sequelize.FLOAT(1),
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
    await queryInterface.dropTable("Lineups");
  },
};
