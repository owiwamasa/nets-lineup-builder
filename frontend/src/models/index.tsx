export type PlayerType = {
  nba_id: number;
  display_name: string;
  image: string;
};

enum ShotEnum {
  "3PT Field Goal",
  "2PT Field Goal",
}

export type ShotType = {
  id: number;
  player_nba_id: number;
  shot_type: ShotEnum;
  loc_x: number;
  loc_y: number;
  createdAt: null;
  updatedAt: null;
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

export type LineupType = {
  id: number;
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

export type LeagueAverageComparisonType = {
  name: string;
  leagueAverage: number;
  projectedLineupStats: number;
  percentageComparedToLeagueAverage: number;
};
