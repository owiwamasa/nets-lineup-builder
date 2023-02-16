import React from "react";
import { Box } from "@mui/material";
import { PlayerType } from "../../models";
import PlayerScrollMenu from "../PlayerSelectorMenu/PlayerScrollMenu";
import { StyledModal } from "./styledComponents";

interface Props {
  selectedPlayers: PlayerType[];
  setSelectedPlayers: React.Dispatch<React.SetStateAction<PlayerType[]>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setHighlightedPlayer: React.Dispatch<React.SetStateAction<PlayerType>>;
}

const PlayerSelectorModal = ({
  selectedPlayers,
  setSelectedPlayers,
  showModal,
  setShowModal,
  setHighlightedPlayer,
}: Props) => {
  return (
    <StyledModal open={showModal} onClose={() => setShowModal(false)}>
      <PlayerScrollMenu
        selectedPlayers={selectedPlayers}
        setSelectedPlayers={setSelectedPlayers}
        setHighlightedPlayer={setHighlightedPlayer}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </StyledModal>
  );
};

export default PlayerSelectorModal;
