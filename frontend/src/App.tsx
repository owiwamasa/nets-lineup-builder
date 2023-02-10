import React, { useState } from "react";
import PlayerSelectorSidebar from "./components/PlayerSelectorSidebar";
import { Box } from "@mui/material";
import { PlayerType } from "./models";

const App = () => {
  const [selectedPlayers, setSelectedPlayers] = useState<number[]>([]);

  return (
    <Box>
      <PlayerSelectorSidebar
        selectedPlayers={selectedPlayers}
        setSelectedPlayers={setSelectedPlayers}
      />
    </Box>
  );
};

export default App;
