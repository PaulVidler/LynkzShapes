import React from "react";
import PropTypes from "prop-types";
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';

function Rectangle({ width, height }) {
  return (
    <Stage width={width} height={height}>
      <Layer>
        <Rect
          width={width}
          height={height}
          fill="#a0b43b"
        />
      </Layer>
    </Stage>
  );
}

Rectangle.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default Rectangle;