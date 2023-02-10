const express = require("express");
const db = require("../../models");
const { asyncHandler } = require("../utils");
const { Player } = db;

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const players = await Player.findAll({
      order: ["display_name"],
      attributes: ["nba_id", "display_name", "image"],
    });
    res.send(players);
  })
);

module.exports = router;