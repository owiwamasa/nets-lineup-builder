"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "LeagueAverages",
      [
        {
          efg_pct: 53.2,
          fg_pct: 46.1,
          three_pt_pct: 35.4,
          off_rating: 112,
          def_rating: 110,
          ast_per_100: 24.9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("LeagueAverages", null, {});
  },
};
