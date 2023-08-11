import React, { useState } from "react";
import LynkzNavbar from "./components/LynkzNavbar";
import ShapeCreator from "./components/ShapeCreator";
import ShapeRenderer from "./components/ShapeRenderer";

function App() {
  return (
    <>
    <LynkzNavbar /> 
    <div style={{ backgroundColor: "#032233", minHeight: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className="col-md-10">
          <ShapeCreator />
          <ShapeRenderer />
        </div>
      </div>
    </div>
    </>
    
  );
}

export default App;

