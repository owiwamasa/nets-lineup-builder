import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  Label,
} from "recharts";
import { PlayerType, LineupComparisonType } from "../../models";
import CustomBarLabel from "./CustomBarLabel";
import CustomToolTip from "./CustomToolTip";
import { InfoText } from "../ShotChart";
import { CircularImageContainer } from "../PlayerSelectorSidebar";

const LineupComparisonContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "966px",
  alignSelf: "center",
}));

const ChartTitle = styled(Typography)(() => ({
  color: "white",
  fontFamily: "Arial",
  fontSize: "30px",
  marginTop: "30px",
}));

const ChartContainer = styled(Box)(() => ({
  width: "100%",
  marginTop: "16px",
  border: "1px solid #FFFFFF",
  borderRadius: "20px",
  padding: "40px 40px",
  boxSizing: "border-box",
}));

const LineupContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-around",
  width: "850",
  marginBottom: "30px",
}));

const PlayerContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
interface Props {
  selectedPlayers: PlayerType[];
}

const LineupComparisonChart = ({ selectedPlayers }: Props) => {
  const [chartData, setChartData] = useState<LineupComparisonType[]>([]);

  useEffect(() => {
    if (selectedPlayers) {
      const playerIds = selectedPlayers.map((player) => player.nba_id);
      axios
        .post(`${process.env.BACKEND_URL}/lineupComparison`, { playerIds })
        .then((res) => {
          setChartData(res.data);
        });
    }
  }, [selectedPlayers]);

  return (
    <LineupComparisonContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <ChartTitle>Projected Lineup Statistics </ChartTitle>
        <InfoText>* Compared to 2021-22 Regular Season League Average</InfoText>
      </Box>
      <ChartContainer>
        <LineupContainer>
          {selectedPlayers.map((player) => (
            <PlayerContainer key={player.nba_id}>
              <CircularImageContainer>
                <img
                  src={player.image}
                  alt="Player profile"
                  width="70px"
                  height="auto"
                />
              </CircularImageContainer>
              <Typography sx={{ color: "white" }}>
                {player.display_name}
              </Typography>
            </PlayerContainer>
          ))}
        </LineupContainer>
        <BarChart
          data={chartData}
          width={850}
          height={700}
          margin={{ top: 10, bottom: 10 }}
        >
          <XAxis dataKey="name" stroke="white" />
          <YAxis stroke="white" domain={["dataMin - 5", "dataMax + 5"]} />
          <Tooltip content={<CustomToolTip />} cursor={{ fill: "#222222" }} />
          <Bar
            dataKey="percentageComparedToLeagueAverage"
            fill={"#814CC2"}
            barSize={40}
            radius={[20, 20, 0, 0]}
            label={CustomBarLabel}
          />
          <ReferenceLine y={0} stroke="white" strokeWidth={3} isFront={true}>
            <Label value="0" position="left" fill="white" />
          </ReferenceLine>
        </BarChart>
      </ChartContainer>
      <InfoText>
        * FG - Field Goal | 3pt - 3 point | EFG - Effective Field Goal | Assists
        per 100 - Assists per 100 Possessions | Off Rating - Offensive Rating |
        Def Rating - Defensive Rating
      </InfoText>
    </LineupComparisonContainer>
  );
};

export default LineupComparisonChart;
