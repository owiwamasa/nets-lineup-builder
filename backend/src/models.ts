export type PlayerType = {
  id: number;
  nba_id: number;
  display_name: string;
  player_code: string;
  off_rating: number;
  def_rating: number;
  ast_per_100: number;
  two_pt_attempts: number;
  two_pt_makes: number;
  three_pt_attempts: number;
  three_pt_makes: number;
  image: string;
  createdAt: Date;
  updatedAt: Date;
};

export type PlayerQueriedType = {
  dataValues: PlayerType;
};

export enum ShotEnum {
  "3PT Field Goal",
  "2PT Field Goal",
}

export type ShotType = {
  id: number;
  player_nba_id: number;
  shot_type: ShotEnum;
  loc_x: number;
  loc_y: number;
  shot_made_flag: number;
  createdAt: Date | null;
  updatedAt: Date | null;
};

export type LineupType = {
  id?: number;
  lineup_code: string;
  efg_pct: number;
  fg_pct: number;
  three_pt_pct: number;
  off_rating: number;
  def_rating: number;
  ast_per_100: number;
  createdAt: Date;
  updatedAt: Date;
};

export type LeagueAverageType = {
  id: number;
  efg_pct: number;
  fg_pct: number;
  three_pt_pct: number;
  off_rating: number;
  def_rating: number;
  ast_per_100: number;
  createdAt: Date;
  updatedAt: Date;
};

export type LineupComparisonType = {
  name: string;
  leagueAverage: number;
  projectedLineupStats: number;
  percentageComparedToLeagueAverage: number;
};
