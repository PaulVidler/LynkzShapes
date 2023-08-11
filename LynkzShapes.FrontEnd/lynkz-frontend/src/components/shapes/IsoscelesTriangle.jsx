// import React from "react";
// import PropTypes from "prop-types";
// import { Stage, Layer, Line } from "react-konva";

// function IsoscelesTriangle({ base, height }) {
//   const centerX = base / 2;
//   const trianglePoints = [0, height, base, height, centerX, 0]; // Adjusted points for 180-degree rotation

//   return (
//     <Stage width={base} height={height}>
//       <Layer>
//         <Line
//           points={trianglePoints}
//           closed
//           fill="#a0b43b"
//         />
//       </Layer>
//     </Stage>
//   );
// }

// IsoscelesTriangle.propTypes = {
//   base: PropTypes.number.isRequired,
//   height: PropTypes.number.isRequired,
// };

// export default IsoscelesTriangle;
import React from 'react';
import PropTypes from 'prop-types';
import { Stage, Layer, Line } from 'react-konva';

function IsoscelesTriangle({ baseLength, height }) { 
  const centerX = baseLength / 2;

  const points = [
    { x: 0, y: height },
    { x: baseLength, y: height },
    { x: centerX, y: 0 },
  ];

  return (
    <Stage width={baseLength} height={height}>
      <Layer>
        <Line
          points={points.flatMap((point) => [point.x, point.y])}
          closed
          fill="#a0b43b"
        />
      </Layer>
    </Stage>
  );
}

IsoscelesTriangle.propTypes = {
  baseLength: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default IsoscelesTriangle;
