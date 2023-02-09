"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    static associate(models) {}
  }
  Player.init(
    {
      nba_id: DataTypes.INTEGER,
      display_name: DataTypes.STRING,
      player_code: DataTypes.STRING,
      off_rating: DataTypes.INTEGER,
      def_rating: DataTypes.INTEGER,
      ast_per_100: DataTypes.FLOAT(1),
      two_pt_attempts: DataTypes.INTEGER,
      two_pt_makes: DataTypes.INTEGER,
      three_pt_attempts: DataTypes.INTEGER,
      three_pt_makes: DataTypes.INTEGER,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Player",
    }
  );
  return Player;
};
