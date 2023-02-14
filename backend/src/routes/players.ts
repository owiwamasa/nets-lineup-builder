import express, { Router, Request, Response } from "express";
import { PlayerType } from "../models";
import { asyncHandler } from "../utils";
const db = require("../../models");
const { Player } = db;

const playerRouter: Router = express.Router();

playerRouter.get(
  "/",
  asyncHandler(async (req: Request, res: Response) => {
    const players: PlayerType[] = await Player.findAll({
      order: ["display_name"],
    });
    res.send(players);
  })
);

export default playerRouter;
