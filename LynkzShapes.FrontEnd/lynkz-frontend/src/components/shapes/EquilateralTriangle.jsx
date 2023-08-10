import React from "react";
import PropTypes from "prop-types";
import { Stage, Layer, Line } from "react-konva";

function EquilateralTriangle({ sideLength }) {
  const triangleHeight = (Math.sqrt(3) / 2) * sideLength;

  const pointAx = 0;
  const pointAy = triangleHeight;

  const pointBx = sideLength;
  const pointBy = triangleHeight;

  const pointCx = sideLength / 2;
  const pointCy = 0;

  const trianglePoints = [pointAx, pointAy, pointBx, pointBy, pointCx, pointCy, pointAx, pointAy];

  return (
    <Stage width={sideLength} height={triangleHeight}>
      <Layer>
        <Line
          points={trianglePoints}
          closed
          fill="#a0b43b"
        />
      </Layer>
    </Stage>
  );
}

EquilateralTriangle.propTypes = {
  sideLength: PropTypes.number.isRequired,
};

export default EquilateralTriangle;
