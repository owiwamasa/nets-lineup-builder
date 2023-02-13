export type PlayerType = {
  id: number;
  nba_id: number;
  display_name: string;
  image: string;
  player_code: string;
  off_rating: number;
  def_rating: number;
  ast_per_100: number;
  two_pt_attempts: number;
  two_pt_makes: number;
  three_pt_attempts: number;
  three_pt_makes: number;
  createdAt: Date;
  updatedAt: Date;
};

export enum ShotEnum {
  "3PT Field Goal",
  "2PT Field Goal",
}

export type ShotType = {
  id: number;
  player_nba_id: number;
  shot_type: ShotEnum;
  shot_made_flag: number;
  loc_x: number;
  loc_y: number;
  createdAt: null;
  updatedAt: null;
};

export type LineupComparisonType = {
  name: string;
  leagueAverage: number;
  projectedLineupStats: number;
  percentageComparedToLeagueAverage: number;
};
