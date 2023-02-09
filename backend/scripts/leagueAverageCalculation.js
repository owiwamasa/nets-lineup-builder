const axios = require("axios");
require("dotenv").config();

const createRequestOptions = (teamId) => {
  return {
    method: "GET",
    url: `http://api.sportradar.us/nba/trial/v7/en/seasons/2021/REG/teams/${teamId}/statistics.json?api_key=${process.env.SPORTS_RADAR_API_KEY}`,
    headers: {
      "Content-Type": "application/json",
    },
  };
};

const GET_ALL_TEAM_IDS = async () => {
  const res = await axios({
    method: "GET",
    url: `http://api.sportradar.us/nba/trial/v7/en/league/hierarchy.json?api_key=${process.env.SPORTS_RADAR_API_KEY}`,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const allTeamIds = [];

  res.data.conferences.forEach((conference) => {
    conference.divisions.forEach((division) => {
      let teams = division.teams;
      allTeamIds.push(teams[0].id);
      allTeamIds.push(teams[1].id);
      allTeamIds.push(teams[2].id);
      allTeamIds.push(teams[3].id);
      allTeamIds.push(teams[4].id);
    });
  });
};

const calculateLeagueAverages = async () => {
  const teamIds = await GET_ALL_TEAM_IDS();
  let total2ptMade = 0;
  let total3ptAttempts = 0;
  let total3ptMade = 0;
  let totalFGAttempts = 0;
  let totalFGMade = 0;

  teamIds.forEach(async (teamId) => {
    let res = await axios(createRequestOptions(teamId));
    let teamTotals = res.data.own_record.total;

    total2ptMade += teamTotals.two_points_made;
    total3ptAttempts += teamTotals.three_points_att;
    total3ptMade += teamTotals.three_points_made;
    totalFGAttempts += teamTotals.field_goals_att;
    (totalFGMade += teamTotals), field_goals_made;
  });

  return {
    fg_pct: (totalFGMade / totalFGAttempts) * 100,
    three_pt_pct: (total3ptMade / total3ptAttempts) * 100,
    efg_pct: (total2ptMade + 1.5 * total3ptMade) / totalFGAttempts,
  };
};

// console.log(GET_ALL_TEAM_IDS());
