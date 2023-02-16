import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import axios from "axios";
import { PlayerType } from "../../models";
import CloseIcon from "@mui/icons-material/Close";
import {
  MenuContainer,
  MenuTitle,
  PlayerScrollContainer,
  PlayerSelectButton,
  ButtonContentContainer,
  CircularImageContainer,
  ScrollBarPlayerName,
} from "./styledComponents";

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
                <ScrollBarPlayerName>{player.display_name}</ScrollBarPlayerName>
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
