import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ClearIcon from "@mui/icons-material/Clear";
import { PlayerType } from "../../models";

const SelectedPlayersContainer = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
}));

const PlayerCard = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxSizing: "border-box",
  padding: "10px 10px 10px 10px",
  width: "156px",
  height: "206px",
  borderRadius: "20px",
  backgroundColor: "#222222",
}));

const RemovePlayerButton = styled(Button)(() => ({
  padding: 0,
  alignSelf: "flex-end",
  minWidth: "24px",
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

const CircularImageContainer = styled(Box)(() => ({
  borderRadius: "50%",
  width: "110px",
  height: "110px",
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
  fontSize: "16px",
  marginTop: "16px",
}));

const EmptyCard = styled(Box)(() => ({
  width: "150px",
  height: "200px",
  border: "3px dashed white",
  borderRadius: "20px",
}));

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
        Array.apply(null, Array(emptyCardCount)).map(() => <EmptyCard />)}
    </SelectedPlayersContainer>
  );
};

export default SelectedPlayers;
