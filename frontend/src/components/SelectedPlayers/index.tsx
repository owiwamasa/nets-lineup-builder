import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { PlayerType } from "../../models";
import {
  SelectedPlayersContainer,
  PlayerCard,
  RemovePlayerButton,
  CircularImageContainer,
  PlayerName,
  EmptyCard,
} from "./styledComponents";

interface Props {
  selectedPlayers: PlayerType[];
  setSelectedPlayers: React.Dispatch<React.SetStateAction<PlayerType[]>>;
}

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers }: Props) => {
  const emptyCardCount: number = 5 - selectedPlayers.length;

  const removeSelectedPlayer = (nba_id: number) => {
    setSelectedPlayers(
      selectedPlayers.filter(
        (selectedPlayer) => selectedPlayer.nba_id !== nba_id
      )
    );
  };
  return (
    <SelectedPlayersContainer>
      {selectedPlayers.length > 0 &&
        selectedPlayers.map((player) => (
          <PlayerCard key={player.nba_id}>
            <RemovePlayerButton
              disableRipple
              onClick={() => removeSelectedPlayer(player.nba_id)}
            >
              <ClearIcon sx={{ color: "white" }} />
            </RemovePlayerButton>
            <CircularImageContainer>
              <img
                src={player.image}
                alt="Player profile"
                width="150px"
                height="100px"
              />
            </CircularImageContainer>
            <PlayerName>{player.display_name}</PlayerName>
          </PlayerCard>
        ))}
      {emptyCardCount > 0 &&
        Array.apply(null, Array(emptyCardCount)).map(
          (value: null, index: number) => <EmptyCard key={index} />
        )}
    </SelectedPlayersContainer>
  );
};

export default SelectedPlayers;
