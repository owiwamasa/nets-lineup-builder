const express = require("express");
const db = require("../../models");
const { asyncHandler } = require("../utils");
const { LeagueAverage } = db;

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const leagueAverage = await LeagueAverage.findOne({
      order: [["id", "DESC"]],
    });
    res.send(leagueAverage);
  })
);

module.exports = router;
