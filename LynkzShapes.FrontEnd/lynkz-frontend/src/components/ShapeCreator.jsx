import React, { useState } from 'react';
import axios from 'axios';
import Oval from './shapes/Oval'; 
import Square from './shapes/Square'; 
import Circle from './shapes/CircleShape'; 
import Pentagon from './shapes/Pentagon'; 
import Hexagon from './shapes/Hexagon'; 
import Heptagon from './shapes/Heptagon'; 
import Octagon from './shapes/Octagon'; 
import EquilateralTriangle from './shapes/EquilateralTriangle';
import Rectangle from './shapes/Rectangle';


const ShapeCreator = () => {
  const [shapeDescription, setShapeDescription] = useState('');
  const [shapeType, setShapeType] = useState('');
  const [shapeDimensions, setShapeDimensions] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://localhost:7227/api/shapes/create', {
        shapeDescription: shapeDescription,
      });

      const responseData = response.data;
      setShapeType(responseData.shapeType);
      setShapeDimensions(responseData.shapeDimensions);
      setErrorMessage(responseData.errorMessage);
    } catch (error) {
      console.error('Error creating shape:', error);
    }
  };

  // this works for Oval
//   const renderShape = () => {
//     console.log(shapeDimensions);
//     console.log(shapeType);
//     if (errorMessage == null) {
//       return <Oval width={shapeDimensions.Width} height={shapeDimensions.Height} />;
//     }
//     return null;
//   };

  const renderShape = () => {
    if (errorMessage == null) {
              if (shapeType === "Oval") {
                return <Oval width={shapeDimensions.Width} height={shapeDimensions.Height} />;
              } else if (shapeType === "Square") {
                return <Square sideLength={shapeDimensions.Side} />;
              } else if (shapeType === "Circle") {
                return <Circle radius={shapeDimensions.Radius} />;
              } else if (shapeType === "Pentagon") {
                return <Pentagon sideLength={shapeDimensions.Side} />;
              } else if (shapeType === "Heptagon") {
                return <Heptagon sideLength={shapeDimensions.Side} />;
              } else if (shapeType === "Hexagon") {
                return <Hexagon sideLength={shapeDimensions.Side} />;
              } else if (shapeType === "Equilateral Triangle") {
                return <EquilateralTriangle sideLength={shapeDimensions.Side} />;
              } else if (shapeType === "Octagon") {
                return <Octagon sideLength={shapeDimensions.Side} />;
              } else if (shapeType === "Rectangle") {
                return <Rectangle width={shapeDimensions.Width} height={shapeDimensions.Height} />;
              }
            }
    return null;
  };

return (
    <div>
      <input
        type="text"
        value={shapeDescription}
        onChange={(e) => setShapeDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      {renderShape()}
    </div>
  );
};

export default ShapeCreator;
