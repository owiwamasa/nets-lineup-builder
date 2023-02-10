const express = require("express");
const db = require("../../models");
const { asyncHandler } = require("../utils");
const { Shot } = db;

const router = express.Router();

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { playerIds } = req.body;
    const madeShots = await Shot.findAll({
      where: {
        player_nba_id: playerIds,
        shot_made_flag: 1,
      },
    });
    const missedShots = await Shot.findAll({
      where: {
        player_nba_id: playerIds,
        shot_made_flag: 0,
      },
    });
    res.send({
      madeShots: madeShots.map((shot) => shot.dataValues),
      missedShots: missedShots.map((shot) => shot.dataValues),
    });
  })
);

module.exports = router;
