"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Shot extends Model {
    static associate(models) {}
  }
  Shot.init(
    {
      player_nba_id: DataTypes.INTEGER,
      shot_type: DataTypes.STRING,
      loc_x: DataTypes.INTEGER,
      loc_y: DataTypes.INTEGER,
      shot_made_flag: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Shot",
    }
  );
  return Shot;
};
