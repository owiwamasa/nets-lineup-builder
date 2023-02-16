import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { styled } from "@mui/system";
import axios from "axios";
import { PlayerType } from "../../models";
import CloseIcon from "@mui/icons-material/Close";

interface StyledComponentProps {
  showModal: boolean;
}

const MenuContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "showModal",
})(({ showModal }: StyledComponentProps) => ({
  height: showModal ? "90%" : "58%",
}));

const MenuTitle = styled(Typography, {
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

const PlayerScrollContainer = styled(Box)(() => ({
  height: "85%",
  boxSizing: "border-box",
  paddingBottom: "30px",
  overflowY: "scroll",
}));

const PlayerSelectButton = styled(Button)(() => ({
  padding: "12px 40px",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  "&:hover": {
    backgroundColor: "#4E4E4E",
  },
}));

const ButtonContentContainer = styled(Box)(() => ({
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

const PlayerName = styled(Typography)(() => ({
  color: "white",
  textTransform: "capitalize",
  fontFamily: "Arial",
  fontSize: "26px",
  whiteSpace: "nowrap",
  marginLeft: "30px",
}));

interface Props {
  selectedPlayers: PlayerType[];
  setSelectedPlayers: React.Dispatch<React.SetStateAction<PlayerType[]>>;
  setHighlightedPlayer: React.Dispatch<React.SetStateAction<PlayerType>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const PlayerScrollMenu = ({
  selectedPlayers,
  setSelectedPlayers,
  showModal,
  setShowModal,
  setHighlightedPlayer,
}: Props) => {
  const [players, setPlayers] = useState<PlayerType[]>([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/players`).then((res) => {
      setPlayers(res.data);
      setHighlightedPlayer(res.data[0]);
    });
  }, []);

  const addOrRemoveSelectedPlayerIds = (player: PlayerType) => {
    if (
      selectedPlayers.some(
        (selectedPlayer) => selectedPlayer.nba_id === player.nba_id
      )
    ) {
      setSelectedPlayers(
        selectedPlayers.filter(
          (selectedPlayer) => selectedPlayer.nba_id !== player.nba_id
        )
      );
    } else {
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };
  return (
    <MenuContainer showModal={showModal}>
      <MenuTitle showModal={showModal}>Add Players</MenuTitle>
      <CloseIcon
        onClick={() => setShowModal(false)}
        sx={{
          display: showModal ? "block" : "none",
          position: "absolute",
          top: 20,
          right: 20,
          color: "white",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      />
      <PlayerScrollContainer>
        {players &&
          players.map((player) => (
            <PlayerSelectButton
              disableRipple
              key={player.nba_id}
              onClick={() => addOrRemoveSelectedPlayerIds(player)}
              onMouseEnter={() => setHighlightedPlayer(player)}
              disabled={
                !selectedPlayers.some(
                  (selectedPlayer) => selectedPlayer.nba_id === player.nba_id
                ) && selectedPlayers.length === 5
              }
            >
              <ButtonContentContainer>
                <CircularImageContainer>
                  <img
                    src={player.image}
                    alt="Player profile"
                    width="70px"
                    height="auto"
                  />
                </CircularImageContainer>
                <PlayerName>{player.display_name}</PlayerName>
              </ButtonContentContainer>
              {selectedPlayers.some(
                (selectedPlayer) => selectedPlayer.nba_id === player.nba_id
              ) ? (
                <RemoveIcon sx={{ color: "white" }} />
              ) : (
                <AddIcon sx={{ color: "white" }} />
              )}
            </PlayerSelectButton>
          ))}
      </PlayerScrollContainer>
    </MenuContainer>
  );
};

export default PlayerScrollMenu;
