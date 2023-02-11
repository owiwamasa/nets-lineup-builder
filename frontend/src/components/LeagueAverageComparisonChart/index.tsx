import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import {
  PlayerType,
  LeagueAverageType,
  LineupType,
  LeagueAverageComparisonType,
} from "../../models";
import mathRound from "../../utils";

const LeagueAverageComparisonContainer = styled(Box)(() => ({
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

const LeagueAverageComparisonChart = ({ selectedPlayers }: Props) => {
  const [leagueAverage, setLeagueAverage] = useState<LeagueAverageType>();
  const [lineupData, setLineupData] = useState<LineupType>();
  const [chartData, setChartData] = useState<LeagueAverageComparisonType[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/leagueAverages")
      .then((res) => setLeagueAverage(res.data));
  }, []);

  useEffect(() => {
    if (selectedPlayers) {
      const playerIds = selectedPlayers.map((player) => player.nba_id);
      axios.post("http://localhost:8000/lineups", { playerIds }).then((res) => {
        setLineupData(res.data);
      });
    }
  }, [selectedPlayers]);

  useEffect(() => {
    if (leagueAverage && lineupData) {
      setChartData([
        {
          name: "FG%",
          leagueAverage: leagueAverage.fg_pct,
          projectedLineupStats: lineupData.fg_pct,
          percentageComparedToLeagueAverage: mathRound(
            lineupData.fg_pct - leagueAverage.fg_pct,
            1
          ),
        },
        {
          name: "3pt%",
          leagueAverage: leagueAverage.three_pt_pct,
          projectedLineupStats: lineupData.three_pt_pct,
          percentageComparedToLeagueAverage: mathRound(
            lineupData.three_pt_pct - leagueAverage.three_pt_pct,
            1
          ),
        },
        {
          name: "EFG%",
          leagueAverage: leagueAverage.efg_pct,
          projectedLineupStats: lineupData.efg_pct,
          percentageComparedToLeagueAverage: mathRound(
            lineupData.efg_pct - leagueAverage.efg_pct,
            1
          ),
        },
        {
          name: "Assists per 100",
          leagueAverage: leagueAverage.ast_per_100,
          projectedLineupStats: lineupData.ast_per_100,
          percentageComparedToLeagueAverage: mathRound(
            ((lineupData.ast_per_100 - leagueAverage.ast_per_100) /
              leagueAverage.ast_per_100) *
              100,
            1
          ),
        },
        {
          name: "Off Rating",
          leagueAverage: leagueAverage.off_rating,
          projectedLineupStats: lineupData.off_rating,
          percentageComparedToLeagueAverage: mathRound(
            ((lineupData.off_rating - leagueAverage.off_rating) /
              leagueAverage.off_rating) *
              100,
            1
          ),
        },
        {
          name: "Def Rating",
          leagueAverage: leagueAverage.def_rating,
          projectedLineupStats: lineupData.def_rating,
          percentageComparedToLeagueAverage: mathRound(
            ((lineupData.def_rating - leagueAverage.def_rating) /
              leagueAverage.def_rating) *
              100,
            1
          ),
        },
      ]);
    }
  }, [leagueAverage, lineupData]);

  interface CustomToolTipProps {
    payload?: any;
    label?: string;
    active?: boolean;
  }

  const CustomToolTip = ({ payload, label, active }: CustomToolTipProps) => {
    if (active) {
      const lineupProjection = payload[0].payload.projectedLineupStats;
      const leagueAverage = payload[0].payload.leagueAverage;
      const percentageComparedToLeagueAverage =
        payload[0].payload.percentageComparedToLeagueAverage;
      return (
        <Box
          sx={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <Typography>{`Lineup Projection: ${lineupProjection} ${label}`}</Typography>
          <Typography>{`League Average: ${leagueAverage} ${label}`}</Typography>
          <Typography
            sx={{
              color:
                percentageComparedToLeagueAverage > 0 ? "green" : "#ff073a",
            }}
          >{`Comparison to League Average: ${
            percentageComparedToLeagueAverage >= 0 ? "+" : ""
          }${percentageComparedToLeagueAverage}%`}</Typography>
        </Box>
      );
    }
  };

  const CustomBarLabel = ({ value, x, y, width, height }: any) => {
    return (
      <text
        x={x + width / 2}
        y={y}
        textAnchor="middle"
        dy={value >= 0 ? height + 20 : height - 8}
        fill={value >= 0 ? "green" : "#ff073a"}
      >
        {value >= 0 ? `+${value}%` : `${value}%`}
      </text>
    );
  };

  return (
    <LeagueAverageComparisonContainer>
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
          <Tooltip content={<CustomToolTip />} />
          <ReferenceLine y={0} stroke="white" strokeWidth={1} isFront={true} />
          <Bar
            dataKey="percentageComparedToLeagueAverage"
            fill={"#814CC2"}
            barSize={40}
            radius={[20, 20, 0, 0]}
            label={CustomBarLabel}
          />
        </BarChart>
      </ChartContainer>
    </LeagueAverageComparisonContainer>
  );
};

export default LeagueAverageComparisonChart;
