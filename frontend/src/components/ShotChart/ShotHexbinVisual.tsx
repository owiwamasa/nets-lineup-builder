import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import * as D3 from "d3";
import * as d3 from "d3-hexbin";
import { PlayerType, ShotType } from "../../models";
import { pointsPerShotCalculation, hexbinColorMapper } from "../../utils";

interface Props {
  selectedPlayers: PlayerType[];
}

const ShotHexbinVisual = ({ selectedPlayers }: Props) => {
  const [shots, setShots] = useState<ShotType[]>();

  useEffect(() => {
    const playerIds = selectedPlayers.map((player) => player.nba_id);
    axios.post("http://localhost:8000/shots", { playerIds }).then((res) => {
      setShots(res.data);
    });
  }, [selectedPlayers]);

  const svgRef = useRef();
  useEffect(() => {
    if (shots) {
      const width = 966;
      const height = 700;
      const svg = D3.select(svgRef.current)
        .attr("width", width)
        .attr("height", height)
        .style("position", "relative")
        .style("top", -700);
      const xScale = D3.scaleLinear()
        .domain([-300, 300])
        .range([0, Number(width)]);
      const yScale = D3.scaleLinear()
        .domain([-50, 340])
        .range([Number(height), 0]);
      svg.selectAll("*").remove();

      const shotDataFormattedForHexbin: any = [];
      shots.forEach((d: ShotType) =>
        shotDataFormattedForHexbin.push([
          xScale(d.loc_x),
          yScale(d.loc_y),
          d.shot_made_flag,
          d.shot_type,
        ])
      );

      const hexbin = d3
        .hexbin()
        .radius(20)
        .extent([
          [-300, -50],
          [300, 340],
        ]);

      const shotsFormattedWithPtsPerShot = pointsPerShotCalculation(
        hexbin(shotDataFormattedForHexbin)
      );

      svg
        .append("clipPath")
        .attr("id", "clip")
        .append("rect")
        .attr("width", width)
        .attr("height", height);

      svg
        .append("g")
        .attr("clip-path", "url(#clip)")
        .selectAll("path")
        .data(hexbin(shotsFormattedWithPtsPerShot))
        .join("path")
        .attr("d", hexbin.hexagon())
        .attr("transform", function (d) {
          return `translate(${d.x}, ${d.y})`;
        })
        .attr("fill", (d: any) => {
          let pointsPerShot = d[0][2] / d.length;
          return hexbinColorMapper(pointsPerShot);
        })
        .attr("stroke", "white")
        .attr("stroke-width", "0.5");
    }
  }, [shots]);
  return <svg ref={svgRef} />;
};

export default ShotHexbinVisual;
