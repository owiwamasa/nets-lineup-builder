import React, { useState } from "react";
import { PlayerType } from "./models";
import PlayerSelectorMenu from "./components/PlayerSelectorMenu";
import SelectedPlayers from "./components/SelectedPlayers";
import ShotChart from "./components/ShotChart";
import LineupComparisonChart from "./components/LineupComparisonChart";
import PlayerSelectorModal from "./components/PlayerSelectorModal";
import MenuButton from "./components/PlayerSelectorModal/MenuButton";
import {
  AppContainer,
  MainContentContainer,
  TitleContainer,
  TitleText,
} from "./styledComponents";

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
      <MenuButton showModal={showModal} setShowModal={setShowModal} />
      <PlayerSelectorModal
        selectedPlayers={selectedPlayers}
        setSelectedPlayers={setSelectedPlayers}
        setHighlightedPlayer={setHighlightedPlayer}
        showModal={showModal}
        setShowModal={setShowModal}
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
