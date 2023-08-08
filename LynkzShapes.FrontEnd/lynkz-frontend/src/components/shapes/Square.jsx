import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
//import "./Square.css"; // Import CSS file for styling (create this file in the same directory)

function Square({ sideLength }) {
  const squareStyle = {
    width: `${sideLength}px`,
    height: `${sideLength}px`,
    backgroundColor: "red",
  };

  return <div className="square" style={squareStyle}></div>;
}

Square.propTypes = {
  sideLength: PropTypes.number.isRequired,
};

export default Square;
