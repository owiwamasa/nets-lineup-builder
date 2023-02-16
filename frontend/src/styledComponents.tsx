import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { theme } from "./utils";

export const AppContainer = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  [theme.breakpoints.down("xl")]: {
    justifyContent: "center",
    width: "100%",
  },
}));

export const MainContentContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  padding: "0 60px 80px 60px",
  width: "70%",
  [theme.breakpoints.down("xl")]: {
    alignItems: "flex-start",
    width: "80%",
  },
}));

export const TitleContainer = styled(Box)(() => ({
  height: "15vh",
  paddingBottom: "20px",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "flex-end",
  whiteSpace: "nowrap",
}));

export const TitleText = styled(Typography)(() => ({
  color: "white",
  fontFamily: "Arial",
  fontSize: "30px",
}));
