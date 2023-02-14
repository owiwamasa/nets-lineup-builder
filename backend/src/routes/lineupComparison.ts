import express, { Router, Request, Response } from "express";
import { LeagueAverageType, LineupType, PlayerQueriedType } from "../models";
import { asyncHandler, mathRound, calculateLineupComparison } from "../utils";
const db = require("../../models");
const { Lineup, Player, LeagueAverage } = db;

const lineupComparisonRouter: Router = express.Router();

interface ReqBody {
  playerIds: number[];
}

lineupComparisonRouter.post(
  "/",
  asyncHandler(async (req: Request, res: Response) => {
    const { playerIds }: ReqBody = req.body;
    const lineupCode = playerIds.sort((a, b) => a - b).join("_");
    let lineup: LineupType = await Lineup.findOne({
      where: { lineup_code: lineupCode },
    });

    if (!lineup) {
      const players: PlayerQueriedType[] = await Player.findAll({
        where: { nba_id: playerIds },
      });

      let two_pt_makes_total = 0;
      let two_pt_attempts_total = 0;
      let three_pt_makes_total = 0;
      let three_pt_attempts_total = 0;
      let off_rating_sum = 0;
      let def_rating_sum = 0;
      let ast_per_100_sum = 0;

      players.forEach((player) => {
        two_pt_makes_total += player.dataValues.two_pt_makes;
        two_pt_attempts_total += player.dataValues.two_pt_attempts;
        three_pt_makes_total += player.dataValues.three_pt_makes;
        three_pt_attempts_total += player.dataValues.three_pt_attempts;
        off_rating_sum += player.dataValues.off_rating;
        def_rating_sum += player.dataValues.def_rating;
        ast_per_100_sum += player.dataValues.ast_per_100;
      });

      const lineupData: LineupType = {
        lineup_code: lineupCode,
        efg_pct: mathRound(
          ((two_pt_makes_total + 1.5 * three_pt_makes_total) /
            (two_pt_attempts_total + three_pt_attempts_total)) *
            100,
          1
        ),
        fg_pct: mathRound(
          ((two_pt_makes_total + three_pt_makes_total) /
            (two_pt_attempts_total + three_pt_attempts_total)) *
            100,
          1
        ),
        three_pt_pct:
          three_pt_makes_total > 0
            ? mathRound(
                (three_pt_makes_total / three_pt_attempts_total) * 100,
                1
              )
            : 0,
        off_rating: mathRound(off_rating_sum / players.length, 0),
        def_rating: mathRound(def_rating_sum / players.length, 0),
        ast_per_100: ast_per_100_sum,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      lineup = await Lineup.create(lineupData);
    }

    const leagueAverage: LeagueAverageType = await LeagueAverage.findOne({
      order: [["id", "DESC"]],
    });

    res.send(calculateLineupComparison(lineup, leagueAverage));
  })
);

export default lineupComparisonRouter;
