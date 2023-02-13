import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ShotHexbinVisual from "./ShotHexbinVisual";
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

export const InfoText = styled(Typography)(() => ({
  color: "#88CBAD",
  fontFamily: "Arial",
  fontSize: "12px",
  alignSelf: "flex-end",
}));

const LegendContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: "24px",
  alignSelf: "center",
}));

const LegendText = styled(Typography)(() => ({
  color: "white",
  fontFamily: "Arial",
  fontSize: "16px",
  marginRight: "16px",
}));

const LegendColorsContainer = styled(Box)(() => ({
  height: "24px",
  width: "300px",
  display: "flex",
}));

const LegendLabelContainer = styled(Box)(() => ({
  display: "flex",
  width: "330px",
  justifyContent: "space-between",
}));

interface Props {
  selectedPlayers: PlayerType[];
}

const ShotChart = ({ selectedPlayers }: Props) => {
  const legendColors = [
    "rgb(255,7,58, 0.9)",
    "rgb(255, 139, 40, 0.9)",
    "rgb(255, 255, 0, 0.9)",
    "rgb(57, 255, 20, 0.9)",
  ];
  return (
    <ShotChartContainer>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <ShotChartTitle>Lineup Shot Chart</ShotChartTitle>
        <InfoText>{"* Shots taken during the 2021-22 Regular Season"}</InfoText>
      </Box>
      <CourtSvgContainer>
        <svg width="966px" height="700px">
          <path
            stroke="white"
            fill="#222222"
            d="M 475 690 A 30 30 0 1 1 485 690 L 125 690 L 374 690 L 375 430 A 50 50 0 1 1 573 430 L 375 430 L 573 430 L 575 690 L 825 690 L 125 690 L 126 490 A 82 71 0 1 1 825 490 L 825 690 "
          ></path>
        </svg>
        <ShotHexbinVisual selectedPlayers={selectedPlayers} />
      </CourtSvgContainer>
      <LegendContainer>
        <LegendText sx={{ fontSize: "18px" }}>
          Points per Shot Attempt:
        </LegendText>
        <Box>
          <LegendColorsContainer>
            {legendColors.map((color) => (
              <Box
                key={color}
                sx={{
                  width: "25%",
                  height: "100%",
                  backgroundColor: color,
                }}
              />
            ))}
          </LegendColorsContainer>
          <LegendLabelContainer>
            <LegendText>0</LegendText>
            <LegendText>0.5</LegendText>
            <LegendText>1</LegendText>
            <LegendText>1.5</LegendText>
            <LegendText>2+</LegendText>
          </LegendLabelContainer>
        </Box>
      </LegendContainer>
    </ShotChartContainer>
  );
};

export default ShotChart;
