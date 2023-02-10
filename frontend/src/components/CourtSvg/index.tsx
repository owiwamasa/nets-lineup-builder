import React from "react";
import { Box } from "@mui/material";
import ShotScatterplot from "../ShotScatterplot";
import { PlayerType } from "../../models";

interface Props {
  selectedPlayers: PlayerType[];
}

const CourtSvg = ({ selectedPlayers }: Props) => {
  return (
    <Box
      sx={{
        width: "966px",
        height: "700px",
        backgroundColor: "#222222",
        borderRadius: "20px",
        marginTop: "30px",
        overflow: "hidden",
      }}
    >
      <svg width="966px" height="700px">
        <path
          stroke="white"
          fill="#222222"
          d="M 475 690 A 30 30 0 1 1 485 690 L 125 690 L 374 690 L 375 430 A 50 50 0 1 1 573 430 L 375 430 L 573 430 L 575 690 L 825 690 L 125 690 L 126 490 A 82 71 0 1 1 825 490 L 825 690 "
        ></path>
      </svg>
      <ShotScatterplot selectedPlayers={selectedPlayers} />
    </Box>
  );
};

export default CourtSvg;
