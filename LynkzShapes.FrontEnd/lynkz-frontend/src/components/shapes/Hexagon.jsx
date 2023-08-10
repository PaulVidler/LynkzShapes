import React from "react";
import PropTypes from "prop-types";
import { Stage, Layer, RegularPolygon } from "react-konva";

function Hexagon({ sideLength }) {
  const centerX = sideLength * Math.sqrt(3);
  const radius = centerX;

  return (
    <Stage width={2 * centerX} height={2 * centerX}>
      <Layer>
        <RegularPolygon
          sides={6}
          x={centerX}
          y={centerX}
          radius={radius}
          fill="#a0b43b"
        />
      </Layer>
    </Stage>
  );
}

Hexagon.propTypes = {
  sideLength: PropTypes.number.isRequired,
};

export default Hexagon;