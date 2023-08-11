import React from 'react';
import PropTypes from 'prop-types';
import { Stage, Layer, Line } from 'react-konva';

function Parallelogram({ baseLength, height, skew }) {
  const topRight = { x: baseLength, y: 0 };
  const topLeft = { x: 0 + skew, y: 0 };
  const bottomRight = { x: baseLength - skew, y: height };
  const bottomLeft = { x: 0, y: height };

  return (
    <Stage width={baseLength} height={height}>
      <Layer>
        <Line
          points={[
            bottomLeft.x, bottomLeft.y,
            bottomRight.x, bottomRight.y,
            topRight.x, topRight.y,
            topLeft.x, topLeft.y
          ]}
          closed
          fill="#a0b43b"
        />
      </Layer>
    </Stage>
  );
}

Parallelogram.propTypes = {
  baseLength: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  skew: PropTypes.number.isRequired,
};

export default Parallelogram;
