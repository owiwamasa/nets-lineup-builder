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
  width: "450px",
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
  selectedPlayers: number[];
  setSelectedPlayers: React.Dispatch<React.SetStateAction<number[]>>;
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

  const addOrRemoveSelectedPlayers = (nba_id: number) => {
    if (selectedPlayers.includes(nba_id)) {
      setSelectedPlayers(
        selectedPlayers.filter(
          (selectedPlayerId) => selectedPlayerId !== nba_id
        )
      );
    } else {
      setSelectedPlayers([...selectedPlayers, nba_id]);
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
      <Box sx={{ height: "85%" }}>
        <Typography
          sx={{
            color: "white",
            fontFamily: "Arial",
            fontSize: "30px",
            boxSizing: "border-box",
            height: "13%",
            padding: "40px 0 0 65px",
          }}
        >
          Add Players
        </Typography>
        <MenuContainer>
          {players &&
            players.map((player) => (
              <PlayerSelectButton
                disableRipple
                key={player.nba_id}
                onClick={() => addOrRemoveSelectedPlayers(player.nba_id)}
                disabled={
                  !selectedPlayers.includes(player.nba_id) &&
                  selectedPlayers.length === 5
                }
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <CircularImageContainer>
                    <img
                      src={player.image}
                      alt="Player profile"
                      width="75px"
                      height="50px"
                    />
                  </CircularImageContainer>
                  <Typography
                    sx={{
                      color: "white",
                      textTransform: "capitalize",
                      fontFamily: "Arial",
                      fontSize: "26px",
                    }}
                  >
                    {player.display_name}
                  </Typography>
                </Box>
                {selectedPlayers.includes(player.nba_id) ? (
                  <RemoveIcon
                    sx={{ color: "white", justifySelf: "flex-end" }}
                  />
                ) : (
                  <AddIcon sx={{ color: "white", justifySelf: "flex-end" }} />
                )}
              </PlayerSelectButton>
            ))}
        </MenuContainer>
      </Box>
    </PlayerSelectorSidebarContainer>
  );
};

export default PlayerSelectorSidebar;
