const express = require("express");
const db = require("../../models");
const { asyncHandler } = require("../utils");
const { Shot } = db;

const router = express.Router();

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { playerIds } = req.body;
    const shots = await Shot.findAll({
      where: {
        player_nba_id: playerIds,
      },
    });
    res.send(shots);
  })
);

module.exports = router;
