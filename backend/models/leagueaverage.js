"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LeagueAverage extends Model {
    static associate(models) {}
  }
  LeagueAverage.init(
    {
      efg_pct: DataTypes.FLOAT(1),
      fg_pct: DataTypes.FLOAT(1),
      three_pt_pct: DataTypes.FLOAT(1),
      off_rating: DataTypes.INTEGER,
      def_rating: DataTypes.INTEGER,
      ast_per_100: DataTypes.FLOAT(1),
    },
    {
      sequelize,
      modelName: "LeagueAverage",
    }
  );
  return LeagueAverage;
};
