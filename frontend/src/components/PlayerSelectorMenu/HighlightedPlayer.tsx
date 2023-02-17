import React from "react";
import { Typography } from "@mui/material";
import { PlayerType } from "../../models";
import { calculateFgPct, calculate3ptPct, calculateEfgPct } from "../../utils";
import {
  HighlightedPlayerContainer,
  PlayerImageNameContainer,
  PlayerName,
  StatsContainer,
  IndividualStat,
} from "./styledComponents";

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
          <IndividualStat key={stat.name}>
            <Typography sx={{ color: "white", fontSize: "12px" }}>
              {stat.name}
            </Typography>
            <Typography sx={{ color: "white", fontSize: "24px" }}>
              {stat.data ? stat.data.toString() : "0"}
            </Typography>
          </IndividualStat>
        ))}
      </StatsContainer>
    </HighlightedPlayerContainer>
  );
};

export default HighlightedPlayer;
