import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const ToolTipContainer = styled(Box)(() => ({
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
}));

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
      <ToolTipContainer>
        <Typography>{`Lineup Projection: ${lineupProjection} ${label}`}</Typography>
        <Typography>{`League Average: ${leagueAverage} ${label}`}</Typography>
        <Typography
          sx={{
            color: percentageComparedToLeagueAverage > 0 ? "green" : "#ff073a",
          }}
        >{`Compared to League Average: ${
          percentageComparedToLeagueAverage >= 0 ? "+" : ""
        }${percentageComparedToLeagueAverage}%`}</Typography>
      </ToolTipContainer>
    );
  }
};

export default CustomToolTip;
