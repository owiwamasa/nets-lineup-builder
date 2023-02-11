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
  padding: "60px 40px",
  boxSizing: "border-box",
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
        .post("http://localhost:8000/lineupComparison", { playerIds })
        .then((res) => {
          setChartData(res.data);
        });
    }
  }, [selectedPlayers]);

  return (
    <LineupComparisonContainer>
      <ChartTitle>Lineup Statistics (Compared to League Average)</ChartTitle>
      <ChartContainer>
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
    </LineupComparisonContainer>
  );
};

export default LineupComparisonChart;
