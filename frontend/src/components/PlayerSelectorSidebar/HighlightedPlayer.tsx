import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { PlayerType } from "../../models";
import { calculateFgPct, calculate3ptPct, calculateEfgPct } from "../../utils";

const HighlightedPlayerContainer = styled(Box)(() => ({
  backgroundColor: "#4E4E4E",
  height: "27%",
  minHeight: "250px",
  boxSizing: "border-box",
  padding: "16px 40px 8px",
  borderBottom: "2px solid white",
  display: "flex",
  flexDirection: "column",
}));

const PlayerImageNameContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-around",
  borderBottom: "2px solid white",
  padding: "0 20px",
}));

const PlayerName = styled(Typography)(() => ({
  color: "white",
  fontSize: "24px",
  marginTop: "16px",
  alignSelf: "center",
  fontWeight: 700,
}));

const StatsContainer = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  paddingTop: "16px",
}));

const IndividualStat = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "33%",
  paddingBottom: "8px",
}));

interface Props {
  highlightedPlayer: PlayerType;
}

const HighlightedPlayer = ({ highlightedPlayer }: Props) => {
  const mapHighlightedPlayerStats = [
    {
      name: "FG%",
      data: calculateFgPct(highlightedPlayer),
    },
    {
      name: "3PT%",
      data: highlightedPlayer?.three_pt_makes
        ? calculate3ptPct(highlightedPlayer)
        : 0,
    },
    {
      name: "EFG%",
      data: calculateEfgPct(highlightedPlayer),
    },
    { name: "Off Rating", data: highlightedPlayer?.off_rating },
    { name: "Def Rating", data: highlightedPlayer?.def_rating },
    { name: "Ast per 100", data: highlightedPlayer?.ast_per_100 },
  ];

  return (
    <HighlightedPlayerContainer>
      <PlayerImageNameContainer>
        <img
          src={highlightedPlayer?.image}
          width="120px"
          height="auto"
          alt="Player profile"
        />
        <PlayerName>{highlightedPlayer?.display_name}</PlayerName>
      </PlayerImageNameContainer>
      <StatsContainer>
        {mapHighlightedPlayerStats.map((stat) => (
          <IndividualStat>
            <Typography sx={{ color: "white", fontSize: "12px" }}>
              {stat.name}
            </Typography>
            <Typography sx={{ color: "white", fontSize: "24px" }}>
              {stat.data}
            </Typography>
          </IndividualStat>
        ))}
      </StatsContainer>
    </HighlightedPlayerContainer>
  );
};

export default HighlightedPlayer;
