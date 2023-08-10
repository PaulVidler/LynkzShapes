import React, { useState } from "react";
import LynkzNavbar from "./components/LynkzNavbar";
import ShapeCreator from "./components/ShapeCreator";
import ShapeRenderer from "./components/ShapeRenderer";
import IsoscelesTriangle from "./components/shapes/IsoscelesTriangle";

function App() {
  return (
    <>
    <LynkzNavbar /> 
    <div style={{ backgroundColor: "#032233", minHeight: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div>
          <ShapeCreator />
          <ShapeRenderer />
          {/* <IsoscelesTriangle baseLength={200} height={300} /> */}
        </div>
      </div>
    </div>
    </>
    
  );
}

export default App;

