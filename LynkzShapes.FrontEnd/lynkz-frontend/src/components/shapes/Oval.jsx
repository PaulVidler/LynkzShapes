import React from "react";
import PropTypes from "prop-types";
import { Stage, Layer, Ellipse } from "react-konva";

function Oval({ width, height }) {
  const centerX = width / 2;
  const centerY = height / 2;

  return (
    <Stage width={width} height={height}>
      <Layer>
        <Ellipse
          x={centerX}
          y={centerY}
          radiusX={centerX}
          radiusY={centerY}
          fill="purple"
        />
      </Layer>
    </Stage>
  );
}

Oval.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default Oval;
