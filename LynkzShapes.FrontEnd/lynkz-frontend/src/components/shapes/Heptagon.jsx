import React from "react";
import PropTypes from "prop-types";
import { Stage, Layer, RegularPolygon } from "react-konva";

function Heptagon({ sideLength }) {
  const centerX = sideLength * 2;
  const radius = centerX;

  return (
    <Stage width={2 * centerX} height={2 * centerX}>
      <Layer>
        <RegularPolygon
          sides={7}
          x={centerX}
          y={centerX}
          radius={radius}
          fill="#a0b43b"
        />
      </Layer>
    </Stage>
  );
}

Heptagon.propTypes = {
  sideLength: PropTypes.number.isRequired,
};

export default Heptagon;