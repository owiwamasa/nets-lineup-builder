import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import * as d3 from "d3";
import { PlayerType } from "../../models";

interface Props {
  selectedPlayers: PlayerType[];
}

const ShotScatterplot = ({ selectedPlayers }: Props) => {
  const [madeShots, setMadeShots] = useState();
  const [missedShots, setMissedShots] = useState();

  useEffect(() => {
    const playerIds = selectedPlayers.map((player) => player.nba_id);
    axios.post("http://localhost:8000/shots", { playerIds }).then((res) => {
      setMadeShots(res.data.madeShots);
      setMissedShots(res.data.missedShots);
    });
  }, [selectedPlayers]);

  const svgRef = useRef();
  useEffect(() => {
    if (madeShots) {
      const width = 966;
      const height = 700;
      const svg = d3
        .select(svgRef.current)
        .attr("width", width)
        .attr("height", height)
        .style("position", "relative")
        .style("top", -700);
      const xScale = d3
        .scaleLinear()
        .domain([-300, 300])
        .range([0, Number(width)]);
      const yScale = d3
        .scaleLinear()
        .domain([-50, 340])
        .range([Number(height), 0]);
      svg.selectAll("*").remove();
      svg
        .append("g")
        .selectAll("dot")
        .data(madeShots)
        .enter()
        .append("circle")
        .attr("cx", (d: any) => xScale(d.loc_x))
        .attr("cy", (d: any) => yScale(d.loc_y))
        .attr("r", 3)
        .style("fill", "#39ff14 ");
      svg
        .append("g")
        .selectAll("dot")
        .data(missedShots)
        .enter()
        .append("circle")
        .attr("cx", (d: any) => xScale(d.loc_x))
        .attr("cy", (d: any) => yScale(d.loc_y))
        .attr("r", 3)
        .style("fill", "#ff073a");
    }
  }, [madeShots, missedShots]);
  return <svg ref={svgRef} />;
};

export default ShotScatterplot;
