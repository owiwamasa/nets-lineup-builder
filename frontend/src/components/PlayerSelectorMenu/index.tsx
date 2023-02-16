import React from "react";
import { Box } from "@mui/material";
import { PlayerType } from "../../models";
import netsLogo from "../../assets/netsLogo.png";
import { styled } from "@mui/system";
import HighlightedPlayer from "./HighlightedPlayer";
import { theme } from "../../utils";
import PlayerScrollMenu from "./PlayerScrollMenu";

const PlayerSelectorSidebarContainer = styled(Box)(() => ({
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

const LogoContainer = styled(Box)(() => ({
  borderBottom: "2px solid white",
  boxSizing: "border-box",
  height: "15%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

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
