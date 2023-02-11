import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { PlayerType } from "./models";
import PlayerSelectorSidebar from "./components/PlayerSelectorSidebar";
import SelectedPlayers from "./components/SelectedPlayers";
import ShotChart from "./components/ShotChart";
import LineupComparisonChart from "./components/LineupComparisonChart";

const AppContainer = styled(Box)(() => ({
  display: "flex",
  width: "100%",
}));

const MainContentContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  margin: "0 60px 80px 60px",
  width: "70%",
}));

const TitleContainer = styled(Box)(() => ({
  height: "15vh",
  paddingBottom: "20px",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "flex-end",
}));

const TitleText = styled(Typography)(() => ({
  color: "white",
  fontFamily: "Arial",
  fontSize: "30px",
}));

const App = () => {
  const [selectedPlayers, setSelectedPlayers] = useState<PlayerType[]>([]);

  return (
    <AppContainer>
      <PlayerSelectorSidebar
        selectedPlayers={selectedPlayers}
        setSelectedPlayers={setSelectedPlayers}
      />
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
