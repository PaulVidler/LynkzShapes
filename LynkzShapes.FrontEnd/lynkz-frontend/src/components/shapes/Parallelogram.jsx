import React from "react";
import PropTypes from "prop-types";
import { Stage, Layer, Line } from "react-konva";

function Parallelogram({ width, height, skew }) {
  const radians = (skew * Math.PI) / 180;
  const skewOffset = height * Math.tan(radians);

  const pointAx = skewOffset;
  const pointAy = 0;

  const pointBx = width + skewOffset;
  const pointBy = 0;

  const pointCx = width;
  const pointCy = height;

  const pointDx = 0;
  const pointDy = height;

  const parallelogramPoints = [
    pointAx, pointAy,
    pointBx, pointBy,
    pointCx, pointCy,
    pointDx, pointDy,
  ];

  return (
    <Stage width={width + skewOffset} height={height}>
      <Layer>
        <Line
          points={parallelogramPoints}
          closed
          fill="yellow"
        />
      </Layer>
    </Stage>
  );
}

Parallelogram.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  skew: PropTypes.number.isRequired,
};

export default Parallelogram;
