import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import CircleIcon from "@mui/icons-material/Circle";
import ShotScatterPlot from "../ShotScatterPlot";
import { PlayerType } from "../../models";

const ShotChartContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "966px",
  alignSelf: "center",
}));

const ShotChartTitle = styled(Typography)(() => ({
  color: "white",
  fontFamily: "Arial",
  fontSize: "30px",
  marginTop: "30px",
}));

const CourtSvgContainer = styled(Box)(() => ({
  width: "966px",
  height: "700px",
  backgroundColor: "#222222",
  borderRadius: "20px",
  marginTop: "16px",
  overflow: "hidden",
  alignSelf: "center",
}));

const InfoText = styled(Typography)(() => ({
  color: "#88CBAD",
  fontFamily: "Arial",
  fontSize: "12px",
  marginTop: "8px",
  alignSelf: "flex-end",
}));

const LegendContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: "8px",
  alignSelf: "center",
}));

const LegendText = styled(Typography)(() => ({
  color: "white",
  fontFamily: "Arial",
  fontSize: "16px",
  marginLeft: "16px",
}));

interface Props {
  selectedPlayers: PlayerType[];
}

const ShotChart = ({ selectedPlayers }: Props) => {
  return (
    <ShotChartContainer>
      <ShotChartTitle>Lineup Shot Chart</ShotChartTitle>
      <CourtSvgContainer>
        <svg width="966px" height="700px">
          <path
            stroke="white"
            fill="#222222"
            d="M 475 690 A 30 30 0 1 1 485 690 L 125 690 L 374 690 L 375 430 A 50 50 0 1 1 573 430 L 375 430 L 573 430 L 575 690 L 825 690 L 125 690 L 126 490 A 82 71 0 1 1 825 490 L 825 690 "
          ></path>
        </svg>
        <ShotScatterPlot selectedPlayers={selectedPlayers} />
      </CourtSvgContainer>
      <InfoText>{"* Shots taken during the 2021-22 Regular Season"}</InfoText>
      <LegendContainer>
        <CircleIcon sx={{ color: "#39ff14" }} />
        <LegendText>Made Field Goal</LegendText>
        <CircleIcon sx={{ color: "#ff073a", marginLeft: "48px" }} />
        <LegendText>Missed Field Goal</LegendText>
      </LegendContainer>
    </ShotChartContainer>
  );
};

export default ShotChart;
