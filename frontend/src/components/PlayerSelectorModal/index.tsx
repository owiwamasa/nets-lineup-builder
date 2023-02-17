import React, { useState, useEffect } from "react";
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
  const getWidth = () =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  const [screenWidth, setScreenWidth] = useState(getWidth());

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setScreenWidth(getWidth()), 150);
      if (screenWidth > 1500) setShowModal(false);
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [setShowModal, screenWidth]);

  return (
    <StyledModal open={showModal} onClose={() => setShowModal(false)}>
      {PlayerScrollMenu({
        selectedPlayers,
        setSelectedPlayers,
        setHighlightedPlayer,
        showModal,
        setShowModal,
      })}
    </StyledModal>
  );
};

export default PlayerSelectorModal;
