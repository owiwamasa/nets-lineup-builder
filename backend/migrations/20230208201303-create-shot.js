"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Shots", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      player_nba_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      shot_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      loc_x: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      loc_y: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      shot_made_flag: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Shots");
  },
};
