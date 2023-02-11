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

export type LineupComparisonType = {
  name: string;
  leagueAverage: number;
  projectedLineupStats: number;
  percentageComparedToLeagueAverage: number;
};
