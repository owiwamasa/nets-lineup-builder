import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, Typography } from "@mui/material";
import { PlayerType } from "../../models";
import netsLogo from "../../assets/netsLogo.png";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { styled } from "@mui/system";

const PlayerSelectorSidebarContainer = styled(Box)(() => ({
  backgroundColor: "#262626",
  width: "30%",
  height: "100vh",
  position: "sticky",
  top: 0,
}));

const LogoContainer = styled(Box)(() => ({
  borderBottom: "2px solid white",
  boxSizing: "border-box",
  height: "15%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const MenuContainer = styled(Box)(() => ({
  height: "85%",
}));

const MenuTitle = styled(Typography)(() => ({
  color: "white",
  fontFamily: "Arial",
  fontSize: "30px",
  boxSizing: "border-box",
  height: "13%",
  padding: "40px 0 0 65px",
}));

const PlayerScrollContainer = styled(Box)(() => ({
  height: "87%",
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

const PlayerName = styled(Typography)(() => ({
  color: "white",
  textTransform: "capitalize",
  fontFamily: "Arial",
  fontSize: "26px",
  whiteSpace: "nowrap",
}));

const CircularImageContainer = styled(Box)(() => ({
  borderRadius: "50%",
  width: "55px",
  height: "55px",
  backgroundColor: "white",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  marginRight: "30px",
}));

interface Props {
  selectedPlayers: PlayerType[];
  setSelectedPlayers: React.Dispatch<React.SetStateAction<PlayerType[]>>;
}

const PlayerSelectorSidebar = ({
  selectedPlayers,
  setSelectedPlayers,
}: Props) => {
  const [players, setPlayers] = useState<PlayerType[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8000/players").then((res) => {
      setPlayers(res.data);
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
    <PlayerSelectorSidebarContainer>
      <LogoContainer>
        <img
          src={netsLogo}
          alt="Brooklyn Nets logo"
          width="350px"
          height="auto"
        />
      </LogoContainer>
      <MenuContainer>
        <MenuTitle>Add Players</MenuTitle>
        <PlayerScrollContainer>
          {players &&
            players.map((player) => (
              <PlayerSelectButton
                disableRipple
                key={player.nba_id}
                onClick={() => addOrRemoveSelectedPlayerIds(player)}
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
                      width="75px"
                      height="50px"
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
    </PlayerSelectorSidebarContainer>
  );
};

export default PlayerSelectorSidebar;
