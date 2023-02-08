"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Players", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nba_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      display_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      player_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      off_rating: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      def_rating: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      ast_per_100: {
        type: Sequelize.FLOAT(1),
        allowNull: true,
      },
      two_pt_attempts: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      two_pt_makes: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      three_pt_attempts: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      three_pt_makes: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true,
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
    await queryInterface.dropTable("Players");
  },
};
