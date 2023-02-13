import { PlayerType } from "./models";

const pointsPerShotCalculation = (data: any) => {
  let res: any[] = [];
  data.forEach((shots: any) => {
    let points_total = 0;

    shots.forEach((shot: any) => {
      let two_pt_made = shot[2] && shot[3] === "2PT Field Goal";
      let three_pt_made = shot[2] && shot[3] === "3PT Field Goal";
      if (two_pt_made) points_total += 2;
      if (three_pt_made) points_total += 2;
    });

    const formattedShots = shots.map((shot: any) => {
      return [shots.x, shots.y, points_total];
    });

    res.push(...formattedShots);
  });
  return res;
};

const mathRound = (value: number, precision: number) => {
  const multiplier = Math.pow(10, precision);
  return Math.round(value * multiplier) / multiplier;
};

export const calculateFgPct = (player: PlayerType) => {
  return mathRound(
    ((player?.two_pt_makes + player?.three_pt_makes) /
      (player?.three_pt_attempts + player?.two_pt_attempts)) *
      100,
    1
  );
};

export const calculate3ptPct = (player: PlayerType) => {
  return mathRound(
    (player?.three_pt_makes / player?.three_pt_attempts) * 100,
    1
  );
};

export const calculateEfgPct = (player: PlayerType) => {
  return mathRound(
    ((player?.two_pt_makes + 1.5 * player?.three_pt_makes) /
      (player?.three_pt_attempts + player?.two_pt_attempts)) *
      100,
    1
  );
};

export default pointsPerShotCalculation;
