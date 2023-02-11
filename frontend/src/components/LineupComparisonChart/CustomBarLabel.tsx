import React from "react";

interface Props {
  value: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

const CustomBarLabel = ({ value, x, y, width, height }: Props) => {
  return (
    <text
      x={x + width / 2}
      y={y}
      textAnchor="middle"
      dy={value >= 0 ? height + 20 : height - 8}
      fill={value >= 0 ? "#39ff14" : "#ff073a"}
    >
      {value >= 0 ? `+${value}%` : `${value}%`}
    </text>
  );
};

export default CustomBarLabel;
