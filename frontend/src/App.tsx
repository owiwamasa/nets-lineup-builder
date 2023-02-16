import React, { useState } from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import { styled } from "@mui/system";
import { PlayerType } from "./models";
import PlayerSelectorMenu from "./components/PlayerSelectorMenu";
import SelectedPlayers from "./components/SelectedPlayers";
import ShotChart from "./components/ShotChart";
import LineupComparisonChart from "./components/LineupComparisonChart";
import { theme } from "./utils";
import MenuIcon from "@mui/icons-material/Menu";
import PlayerScrollMenu from "./components/PlayerSelectorMenu/PlayerScrollMenu";

const AppContainer = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  [theme.breakpoints.down("xl")]: {
    justifyContent: "center",
    width: "100%",
  },
}));

const MainContentContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  padding: "0 60px 80px 60px",
  width: "70%",
  [theme.breakpoints.down("xl")]: {
    alignItems: "flex-start",
    width: "80%",
  },
}));

const TitleContainer = styled(Box)(() => ({
  height: "15vh",
  paddingBottom: "20px",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "flex-end",
  whiteSpace: "nowrap",
}));

const TitleText = styled(Typography)(() => ({
  color: "white",
  fontFamily: "Arial",
  fontSize: "30px",
}));

const App = () => {
  const [selectedPlayers, setSelectedPlayers] = useState<PlayerType[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [highlightedPlayer, setHighlightedPlayer] = useState<PlayerType>();

  return (
    <AppContainer>
      <PlayerSelectorMenu
        selectedPlayers={selectedPlayers}
        setSelectedPlayers={setSelectedPlayers}
        showModal={showModal}
        setShowModal={setShowModal}
        highlightedPlayer={highlightedPlayer}
        setHighlightedPlayer={setHighlightedPlayer}
      />
      <Button
        disableRipple
        onClick={() => setShowModal(!showModal)}
        sx={{
          [theme.breakpoints.up("xl")]: {
            display: "none",
          },
          display: showModal ? "none" : "block",
          position: "absolute",
          top: showModal ? 0 : 20,
          left: showModal ? 330 : 20,
        }}
      >
        <MenuIcon
          sx={{
            color: "white",
            fontSize: "36px",
          }}
        />
      </Button>
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        sx={{
          borderRadius: "20px",
          backgroundColor: "lightgray",
          position: "absolute",
          left: "25%",
          top: "25%",
          bottom: "25%",
          right: "25%",
          minWidth: "400px",
          minHeight: "60vh",
          [theme.breakpoints.down("sm")]: {
            minHeight: "80vh",
          },
        }}
      >
        <PlayerScrollMenu
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          setHighlightedPlayer={setHighlightedPlayer}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </Modal>
      <MainContentContainer>
        <TitleContainer>
          <TitleText>Brooklyn Nets Lineup Evaluator</TitleText>
        </TitleContainer>
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        />
        <ShotChart selectedPlayers={selectedPlayers} />
        {selectedPlayers.length > 0 && (
          <LineupComparisonChart selectedPlayers={selectedPlayers} />
        )}
      </MainContentContainer>
    </AppContainer>
  );
};

export default App;
