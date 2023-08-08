
import React, { useState } from "react";
import Rectangle from './components/shapes/Rectangle';
import Octagon from './components/shapes/Octagon';
import Hexagon from './components/shapes/Hexagon';
import Heptagon from './components/shapes/Heptagon';
import IsoscelesTriangle from './components/shapes/IsoscelesTriangle';
import ScaleneTriangle from './components/shapes/ScaleneTriangle';
import Parallelogram from './components/shapes/Parallelogram';
import EquilateralTriangle from './components/shapes/EquilateralTriangle';
import Pentagon from './components/shapes/Pentagon';
import CircleShape from './components/shapes/CircleShape';
import Oval from './components/shapes/Oval';

function App() {
  
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <div>
        <h1>Shape Examples</h1>
        <Rectangle width={300} height={300} /> {/*Square*/}
        <Rectangle width={90} height={300} />
        <Octagon sideLength={100} />
        <Hexagon sideLength={80} />
        <Heptagon sideLength={80} />
        <IsoscelesTriangle base={100} height={150} />
        <ScaleneTriangle sideA={100} sideB={150} sideC={200} />
        <Parallelogram width={200} height={100} skew={30} />
        <EquilateralTriangle sideLength={150} />
        <Pentagon sideLength={100} />
        <CircleShape radius={80} />
        <Oval width={200} height={100} />
      </div>
    </div>
  );
}

export default App;
