import React from "react";
import PropTypes from "prop-types";
import { Stage, Layer, Line } from "react-konva";

function ScaleneTriangle({ sideA, sideB, sideC }) {
  const angleA = Math.acos((sideB * sideB + sideC * sideC - sideA * sideA) / (2 * sideB * sideC));
  const angleB = Math.acos((sideA * sideA + sideC * sideC - sideB * sideB) / (2 * sideA * sideC));
  const angleC = Math.PI - angleA - angleB;

  const pointAx = 0;
  const pointAy = 0;

  const pointBx = sideC;
  const pointBy = 0;

  const pointCx = sideB * Math.cos(angleA);
  const pointCy = sideB * Math.sin(angleA);

  const trianglePoints = [pointAx, pointAy, pointBx, pointBy, pointCx, pointCy, pointAx, pointAy];

  return (
    <Stage width={sideC} height={sideB}>
      <Layer>
        <Line
          points={trianglePoints}
          closed
          fill="orange"
        />
      </Layer>
    </Stage>
  );
}

ScaleneTriangle.propTypes = {
  sideA: PropTypes.number.isRequired,
  sideB: PropTypes.number.isRequired,
  sideC: PropTypes.number.isRequired,
};

export default ScaleneTriangle;