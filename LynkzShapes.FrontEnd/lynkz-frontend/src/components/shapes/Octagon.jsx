import React from "react";
import PropTypes from "prop-types";
import { Stage, Layer, RegularPolygon } from "react-konva";

function Octagon({ sideLength }) {
  const centerX = sideLength * Math.sqrt(2);
  const radius = centerX;

  return (
    <Stage width={2 * centerX} height={2 * centerX}>
      <Layer>
        <RegularPolygon
          sides={8}
          x={centerX}
          y={centerX}
          radius={radius}
          fill="blue"
        />
      </Layer>
    </Stage>
  );
}

Octagon.propTypes = {
  sideLength: PropTypes.number.isRequired,
};

export default Octagon;