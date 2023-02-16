import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { theme } from "../../utils";

export const ShotChartContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "966px",
  [theme.breakpoints.up("xl")]: {
    alignSelf: "center",
  },
}));

export const ShotChartTitle = styled(Typography)(() => ({
  color: "white",
  fontFamily: "Arial",
  fontSize: "30px",
  marginTop: "30px",
}));

export const CourtSvgContainer = styled(Box)(() => ({
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

export const LegendContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: "24px",
  alignSelf: "center",
}));

export const LegendText = styled(Typography)(() => ({
  color: "white",
  fontFamily: "Arial",
  fontSize: "16px",
  marginRight: "16px",
}));

export const LegendColorsContainer = styled(Box)(() => ({
  height: "24px",
  width: "300px",
  display: "flex",
}));

export const LegendLabelContainer = styled(Box)(() => ({
  display: "flex",
  width: "330px",
  justifyContent: "space-between",
}));
