'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Shot.init({
    player_nba_id: DataTypes.INTEGER,
    shot_type: DataTypes.STRING,
    loc_x: DataTypes.INTEGER,
    loc_y: DataTypes.INTEGER,
    shot_made_flag: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Shot',
  });
  return Shot;
};