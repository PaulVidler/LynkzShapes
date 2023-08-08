import React, { useState } from "react";
import axios from "axios"; // Import axios library

function TextBoxButton({ onCreateShape }) {
  const [inputText, setInputText] = useState("");

  const createShape = async (shapeDescription) => {
    const apiUrl = "https://localhost:7227/api/shapes/create";

    try {
      const response = await axios.post(apiUrl, { ShapeDescription: shapeDescription });
      const shapeInfo = response.data;
      return shapeInfo;
    } catch (error) {
      throw new Error(error.response.data.ErrorMessage || "An error occurred while creating the shape.");
    }
  };

  const handleButtonClick = async () => {
    try {
      const shapeInfo = await createShape(inputText);
      // Pass the shapeInfo to the parent component (App.jsx) for rendering the shape.
      onCreateShape(shapeInfo);
    } catch (error) {
      console.error(error);
      // Handle error here if needed.
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleButtonClick}>Create Shape</button>
    </div>
  );
}

export default TextBoxButton;


