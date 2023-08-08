import React from "react";
import PropTypes from "prop-types";
import { createRoot } from 'react-dom/client';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';

function Rectangle({ width, height }) {
  return (
    <Stage width={width} height={height}>
      <Layer>
        <Rect
          width={width}
          height={height}
          fill="blue"
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