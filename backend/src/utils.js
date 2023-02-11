const asyncHandler = (handler) => {
  return (req, res, next) => {
    return handler(req, res, next).catch(next);
  };
};

const mathRound = (value, precision) => {
  const multiplier = Math.pow(10, precision);
  return Math.round(value * multiplier) / multiplier;
};

const calculateLineupComparison = (lineup, leagueAverage) => {
  return [
    {
      name: "FG%",
      leagueAverage: leagueAverage.fg_pct,
      projectedLineupStats: lineup.fg_pct,
      percentageComparedToLeagueAverage: mathRound(
        lineup.fg_pct - leagueAverage.fg_pct,
        1
      ),
    },
    {
      name: "3pt%",
      leagueAverage: leagueAverage.three_pt_pct,
      projectedLineupStats: lineup.three_pt_pct,
      percentageComparedToLeagueAverage: mathRound(
        lineup.three_pt_pct - leagueAverage.three_pt_pct,
        1
      ),
    },
    {
      name: "EFG%",
      leagueAverage: leagueAverage.efg_pct,
      projectedLineupStats: lineup.efg_pct,
      percentageComparedToLeagueAverage: mathRound(
        lineup.efg_pct - leagueAverage.efg_pct,
        1
      ),
    },
    {
      name: "Assists per 100",
      leagueAverage: leagueAverage.ast_per_100,
      projectedLineupStats: lineup.ast_per_100,
      percentageComparedToLeagueAverage: mathRound(
        ((lineup.ast_per_100 - leagueAverage.ast_per_100) /
          leagueAverage.ast_per_100) *
          100,
        1
      ),
    },
    {
      name: "Off Rating",
      leagueAverage: leagueAverage.off_rating,
      projectedLineupStats: lineup.off_rating,
      percentageComparedToLeagueAverage: mathRound(
        ((lineup.off_rating - leagueAverage.off_rating) /
          leagueAverage.off_rating) *
          100,
        1
      ),
    },
    {
      name: "Def Rating",
      leagueAverage: leagueAverage.def_rating,
      projectedLineupStats: lineup.def_rating,
      percentageComparedToLeagueAverage: mathRound(
        ((lineup.def_rating - leagueAverage.def_rating) /
          leagueAverage.def_rating) *
          100,
        1
      ),
    },
  ];
};

module.exports = {
  asyncHandler,
  mathRound,
  calculateLineupComparison,
};
