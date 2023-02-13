import { PlayerType } from "./models";

export const pointsPerShotCalculation = (data: any) => {
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

export const hexbinColorMapper = (pointsPerShot: number) => {
  const colors = [
    "rgb(255,7,58, 0.9)",
    "rgb(255, 139, 40, 0.9)",
    "rgb(255, 255, 0, 0.9)",
    "rgb(57, 255, 20, 0.9)",
  ];
  let hexbinColor;
  switch (true) {
    case pointsPerShot < 0.5:
      hexbinColor = colors[0];
      break;
    case pointsPerShot < 1:
      hexbinColor = colors[1];
      break;
    case pointsPerShot < 1.5:
      hexbinColor = colors[2];
      break;
    default:
      hexbinColor = colors[3];
      break;
  }
  return hexbinColor;
};
