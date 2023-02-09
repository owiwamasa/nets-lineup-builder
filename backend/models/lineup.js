"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Lineup extends Model {
    static associate(models) {}
  }
  Lineup.init(
    {
      lineup_code: DataTypes.STRING,
      efg_pct: DataTypes.FLOAT(1),
      fg_pct: DataTypes.FLOAT(1),
      three_pt_pct: DataTypes.FLOAT(1),
      off_rating: DataTypes.INTEGER,
      def_rating: DataTypes.INTEGER,
      ast_per_100: DataTypes.FLOAT(1),
    },
    {
      sequelize,
      modelName: "Lineup",
    }
  );
  return Lineup;
};
