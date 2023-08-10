import React from "react";
import PropTypes from "prop-types";

function Square({ sideLength }) {
  const squareStyle = {
    width: `${sideLength}px`,
    height: `${sideLength}px`,
    backgroundColor: "#a0b43b", 
  };

  return <div className="square" style={squareStyle}></div>;
}

Square.propTypes = {
  sideLength: PropTypes.number.isRequired,
};

export default Square;
