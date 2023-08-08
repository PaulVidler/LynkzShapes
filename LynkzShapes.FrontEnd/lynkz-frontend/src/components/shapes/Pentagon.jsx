import React from "react";
import PropTypes from "prop-types";
import { Stage, Layer, RegularPolygon } from "react-konva";

function Pentagon({ sideLength }) {
  const centerX = sideLength * 2;
  const radius = centerX / (1 + Math.sin(Math.PI / 5));

  return (
    <Stage width={2 * centerX} height={2 * centerX}>
      <Layer>
        <RegularPolygon
          sides={5}
          x={centerX}
          y={centerX}
          radius={radius}
          fill="green"
        />
      </Layer>
    </Stage>
  );
}

Pentagon.propTypes = {
  sideLength: PropTypes.number.isRequired,
};

export default Pentagon;
