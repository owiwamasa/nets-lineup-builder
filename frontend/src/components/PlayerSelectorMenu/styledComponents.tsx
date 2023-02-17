import { styled } from "@mui/system";
import { Box, Typography, Button } from "@mui/material";
import { theme } from "../../utils";

export const PlayerSelectorSidebarContainer = styled(Box)(() => ({
  backgroundColor: "#262626",
  width: "30%",
  height: "100vh",
  position: "sticky",
  top: 0,
  [theme.breakpoints.down("xl")]: {
    display: "none",
    width: "400px",
    position: "absolute",
    left: 0,
  },
}));

export const LogoContainer = styled(Box)(() => ({
  borderBottom: "2px solid white",
  boxSizing: "border-box",
  height: "15%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const HighlightedPlayerContainer = styled(Box)(() => ({
  backgroundColor: "#4E4E4E",
  height: "27%",
  minHeight: "250px",
  boxSizing: "border-box",
  padding: "16px 40px 8px",
  borderBottom: "2px solid white",
  display: "flex",
  flexDirection: "column",
}));

export const PlayerImageNameContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-around",
  borderBottom: "2px solid white",
  padding: "0 20px",
}));

export const PlayerName = styled(Typography)(() => ({
  color: "white",
  fontSize: "24px",
  marginTop: "16px",
  alignSelf: "center",
  fontWeight: 700,
}));

export const StatsContainer = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  paddingTop: "16px",
}));

export const IndividualStat = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "33%",
  paddingBottom: "8px",
}));

interface StyledComponentProps {
  showModal: boolean;
}

export const MenuContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "showModal",
})(({ showModal }: StyledComponentProps) => ({
  height: showModal ? "90%" : "58%",
}));

export const MenuTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "showModal",
})(({ showModal }: StyledComponentProps) => ({
  color: "white",
  fontFamily: "Arial",
  fontSize: "30px",
  boxSizing: "border-box",
  height: showModal ? "auto" : "15%",
  padding: "20px 0 0 65px",
  marginBottom: showModal ? "10px" : "0",
}));

export const PlayerScrollContainer = styled(Box)(() => ({
  height: "85%",
  boxSizing: "border-box",
  paddingBottom: "30px",
  overflowY: "scroll",
  [theme.breakpoints.down("xl")]: {
    height: "90%",
    paddingBottom: "0",
  },
  [theme.breakpoints.down(1350)]: {
    height: "95%",
  },
}));

export const PlayerSelectButton = styled(Button)(() => ({
  padding: "12px 40px",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  "&:hover": {
    backgroundColor: "#4E4E4E",
  },
}));

export const ButtonContentContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

export const CircularImageContainer = styled(Box)(() => ({
  borderRadius: "50%",
  width: "55px",
  height: "55px",
  backgroundColor: "white",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
}));

export const ScrollBarPlayerName = styled(Typography)(() => ({
  color: "white",
  textTransform: "capitalize",
  fontFamily: "Arial",
  fontSize: "26px",
  whiteSpace: "nowrap",
  marginLeft: "30px",
}));
