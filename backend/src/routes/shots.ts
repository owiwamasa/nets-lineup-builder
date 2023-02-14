import express, { Router, Request, Response } from "express";
import { ShotType } from "../models";
import { asyncHandler } from "../utils";
const db = require("../../models");
const { Shot } = db;

const shotRouter: Router = express.Router();

interface ReqBody {
  playerIds: number[];
}

shotRouter.post(
  "/",
  asyncHandler(async (req: Request, res: Response) => {
    const { playerIds }: ReqBody = req.body;
    const shots: ShotType[] = await Shot.findAll({
      where: {
        player_nba_id: playerIds,
      },
    });
    res.send(shots);
  })
);

export default shotRouter;
