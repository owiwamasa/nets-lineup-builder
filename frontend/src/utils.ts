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

export default pointsPerShotCalculation;
