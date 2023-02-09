const express = require("express");
const db = require("../../models");
const { asyncHandler, mathRound } = require("../utils");
const { Lineup, Player } = db;

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const { playerIds } = req.body;
    const lineupCode = playerIds.sort((a, b) => a - b).join("_");
    const lineup = await Lineup.findOne({ where: { lineup_code: lineupCode } });

    if (lineup) {
      res.send(lineup);
    } else {
      const players = await Player.findAll({ where: { nba_id: playerIds } });

      const two_pt_makes_total = players.reduce(
        (sum, player) => sum + player.dataValues.two_pt_makes,
        0
      );
      const two_pt_attempts_total = players.reduce(
        (sum, player) => sum + player.dataValues.two_pt_attempts,
        0
      );
      const three_pt_makes_total = players.reduce(
        (sum, player) => sum + player.dataValues.three_pt_makes,
        0
      );
      const three_pt_attempts_total = players.reduce(
        (sum, player) => sum + player.dataValues.three_pt_attempts,
        0
      );
      const off_rating_sum = players.reduce(
        (sum, player) => sum + player.dataValues.off_rating,
        0
      );
      const def_rating_sum = players.reduce(
        (sum, player) => sum + player.dataValues.def_rating,
        0
      );
      const ast_per_100_sum = players.reduce(
        (sum, player) => sum + player.dataValues.ast_per_100,
        0
      );

      const lineupData = {
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
        three_pt_pct: mathRound(
          (three_pt_makes_total / three_pt_attempts_total) * 100,
          1
        ),
        off_rating: mathRound(off_rating_sum / players.length, 0),
        def_rating: mathRound(def_rating_sum / players.length, 0),
        ast_per_100: ast_per_100_sum,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const newLineup = await Lineup.create(lineupData);
      res.send(newLineup);
    }
  })
);

module.exports = router;
