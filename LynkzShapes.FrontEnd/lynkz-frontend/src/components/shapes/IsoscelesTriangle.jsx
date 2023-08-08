import React from "react";
import PropTypes from "prop-types";
import { Stage, Layer, Line } from "react-konva";

function IsoscelesTriangle({ base, height }) {
  const centerX = base / 2;
  const trianglePoints = [0, height, base, height, centerX, 0]; // Adjusted points for 180-degree rotation

  return (
    <Stage width={base} height={height}>
      <Layer>
        <Line
          points={trianglePoints}
          closed
          fill="purple"
        />
      </Layer>
    </Stage>
  );
}

IsoscelesTriangle.propTypes = {
  base: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default IsoscelesTriangle;