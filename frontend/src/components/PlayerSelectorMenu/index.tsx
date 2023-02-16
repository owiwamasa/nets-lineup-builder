import React from "react";
import { PlayerType } from "../../models";
import netsLogo from "../../assets/netsLogo.png";
import HighlightedPlayer from "./HighlightedPlayer";
import PlayerScrollMenu from "./PlayerScrollMenu";
import {
  PlayerSelectorSidebarContainer,
  LogoContainer,
} from "./styledComponents";

interface Props {
  selectedPlayers: PlayerType[];
  setSelectedPlayers: React.Dispatch<React.SetStateAction<PlayerType[]>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  highlightedPlayer: PlayerType;
  setHighlightedPlayer: React.Dispatch<React.SetStateAction<PlayerType>>;
}

const PlayerSelectorMenu = ({
  selectedPlayers,
  setSelectedPlayers,
  showModal,
  setShowModal,
  highlightedPlayer,
  setHighlightedPlayer,
}: Props) => {
  return (
    <PlayerSelectorSidebarContainer>
      <LogoContainer>
        <img
          src={netsLogo}
          alt="Brooklyn Nets logo"
          width="350px"
          height="auto"
        />
      </LogoContainer>
      <HighlightedPlayer highlightedPlayer={highlightedPlayer} />
      <PlayerScrollMenu
        selectedPlayers={selectedPlayers}
        setSelectedPlayers={setSelectedPlayers}
        setHighlightedPlayer={setHighlightedPlayer}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </PlayerSelectorSidebarContainer>
  );
};

export default PlayerSelectorMenu;
