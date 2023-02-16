import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import { theme } from "../../utils";

export const LineupComparisonContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "966px",
  [theme.breakpoints.up("xl")]: {
    alignSelf: "center",
  },
}));

export const ChartTitle = styled(Typography)(() => ({
  color: "white",
  fontFamily: "Arial",
  fontSize: "30px",
  marginTop: "30px",
}));

export const ChartContainer = styled(Box)(() => ({
  width: "100%",
  marginTop: "16px",
  border: "1px solid #FFFFFF",
  borderRadius: "20px",
  padding: "40px 40px",
  boxSizing: "border-box",
}));

export const LineupContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-around",
  width: "850",
  marginBottom: "30px",
}));

export const PlayerContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
