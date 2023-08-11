// import React from 'react';
// import Oval from './shapes/Oval';
// import Square from './shapes/Square';
// import Circle from './shapes/CircleShape';
// import Pentagon from './shapes/Pentagon';
// import Hexagon from './shapes/Hexagon';
// import Heptagon from './shapes/Heptagon';
// import Octagon from './shapes/Octagon';
// import Parallelogram from './shapes/Parallelogram';
// import EquilateralTriangle from './shapes/EquilateralTriangle';
// import ScaleneTriangle from './shapes/ScaleneTriangle';
// import Rectangle from './shapes/Rectangle';
// import IsoscelesTriangle from './shapes/IsoscelesTriangle';

// const ShapeRenderer = ({ shapeType, shapeDimensions, errorMessage }) => {
//     if(errorMessage !== null) return (<div style={{ color: '#a0b43b' }}>{errorMessage}</div>);
//     if (errorMessage === null) {
//         switch (shapeType) {
//         case 'Oval':
//             return <Oval width={shapeDimensions.Width} height={shapeDimensions.Height} />;
//         case 'Square':
//             return <Square sideLength={shapeDimensions.Side} />;
//         case 'Circle':
//             return <Circle radius={shapeDimensions.Radius} />;
//         case 'Pentagon':
//             return <Pentagon sideLength={shapeDimensions.Side} />;
//         case 'Heptagon':
//             return <Heptagon sideLength={shapeDimensions.Side} />;
//         case 'Hexagon':
//             return <Hexagon sideLength={shapeDimensions.Side} />;
//         case 'Equilateral Triangle':
//             return <EquilateralTriangle sideLength={shapeDimensions.Side} />;
//         case 'Octagon':
//             return <Octagon sideLength={shapeDimensions.Side} />;
//         case 'Rectangle':
//             return <Rectangle width={shapeDimensions.Width} height={shapeDimensions.Height} />;
//         case 'Isosceles Triangle':
//             return <IsoscelesTriangle baseLength={shapeDimensions.BaseLength} height={shapeDimensions.Height} />; 
//         case 'Parallelogram':
//             return <Parallelogram baseLength={shapeDimensions.BaseLength} height={shapeDimensions.Height} skew={shapeDimensions.Skew}/>;
//         case "Scalene Triangle":
//             return <ScaleneTriangle sideA={shapeDimensions.SideA} sideB={shapeDimensions.SideB} sideC={shapeDimensions.SideC}/>;
//         default:
//             return null;
//         }
//     }
//     return null;
// };

// export default ShapeRenderer;
import React from 'react';
import Oval from './shapes/Oval';
import Square from './shapes/Square';
import Circle from './shapes/CircleShape';
import Pentagon from './shapes/Pentagon';
import Hexagon from './shapes/Hexagon';
import Heptagon from './shapes/Heptagon';
import Octagon from './shapes/Octagon';
import Parallelogram from './shapes/Parallelogram';
import EquilateralTriangle from './shapes/EquilateralTriangle';
import ScaleneTriangle from './shapes/ScaleneTriangle';
import Rectangle from './shapes/Rectangle';
import IsoscelesTriangle from './shapes/IsoscelesTriangle';

const ShapeRenderer = ({ shapeType, shapeDimensions, errorMessage }) => {
  return (
    <div>
      {errorMessage !== null ? (
        <div style={{ color: '#a0b43b' }}>{errorMessage}</div>
      ) : (
        renderShape(shapeType, shapeDimensions)
      )}
    </div>
  );
};

const renderShape = (shapeType, shapeDimensions) => {
  switch (shapeType) {
    case 'Oval':
      return <Oval width={shapeDimensions.Width} height={shapeDimensions.Height} />;
    case 'Square':
      return <Square sideLength={shapeDimensions.Side} />;
    case 'Circle':
      return <Circle radius={shapeDimensions.Radius} />;
    case 'Pentagon':
      return <Pentagon sideLength={shapeDimensions.Side} />;
    case 'Heptagon':
      return <Heptagon sideLength={shapeDimensions.Side} />;
    case 'Hexagon':
      return <Hexagon sideLength={shapeDimensions.Side} />;
    case 'Equilateral Triangle':
      return <EquilateralTriangle sideLength={shapeDimensions.Side} />;
    case 'Octagon':
      return <Octagon sideLength={shapeDimensions.Side} />;
    case 'Rectangle':
      return <Rectangle width={shapeDimensions.Width} height={shapeDimensions.Height} />;
    case 'Isosceles Triangle':
      return <IsoscelesTriangle baseLength={shapeDimensions.BaseLength} height={shapeDimensions.Height} />;
    case 'Parallelogram':
      return <Parallelogram baseLength={shapeDimensions.BaseLength} height={shapeDimensions.Height} skew={shapeDimensions.Skew} />;
    case 'Scalene Triangle':
      return <ScaleneTriangle sideA={shapeDimensions.SideA} sideB={shapeDimensions.SideB} sideC={shapeDimensions.SideC} />;
    default:
      return null;
  }
};

export default ShapeRenderer;



