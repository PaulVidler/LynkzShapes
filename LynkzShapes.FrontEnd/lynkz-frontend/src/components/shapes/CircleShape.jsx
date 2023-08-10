import React from "react";
import PropTypes from "prop-types";
import { Stage, Layer, Circle } from "react-konva";

function CircleShape({ radius }) {
  const centerX = radius;
  const centerY = radius;

  return (
    <Stage width={2 * radius} height={2 * radius}>
      <Layer>
        <Circle
          x={centerX}
          y={centerY}
          radius={radius}
          fill="#a0b43b"
        />
      </Layer>
    </Stage>
  );
}

CircleShape.propTypes = {
  radius: PropTypes.number.isRequired,
};

export default CircleShape;