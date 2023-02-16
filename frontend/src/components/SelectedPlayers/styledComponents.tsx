import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { theme } from "../../utils";

export const SelectedPlayersContainer = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  [theme.breakpoints.down("xl")]: {
    width: "966px",
  },
}));

export const PlayerCard = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxSizing: "border-box",
  padding: "10px 10px 10px 10px",
  width: "156px",
  height: "206px",
  borderRadius: "20px",
  backgroundColor: "#222222",
}));

export const RemovePlayerButton = styled(Button)(() => ({
  padding: 0,
  alignSelf: "flex-end",
  minWidth: "24px",
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

export const CircularImageContainer = styled(Box)(() => ({
  borderRadius: "50%",
  width: "110px",
  height: "110px",
  backgroundColor: "white",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
}));

export const PlayerName = styled(Typography)(() => ({
  color: "white",
  textTransform: "capitalize",
  fontFamily: "Arial",
  fontSize: "16px",
  marginTop: "16px",
}));

export const EmptyCard = styled(Box)(() => ({
  width: "150px",
  height: "200px",
  border: "3px dashed white",
  borderRadius: "20px",
}));
