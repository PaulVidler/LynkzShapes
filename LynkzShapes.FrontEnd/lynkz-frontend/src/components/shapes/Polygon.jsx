import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import "../../App.css"; // Import CSS file for styling (create this file in the same directory)

function Polygon({ sideLength, sides }) {
  const polygonStyle = {
    width: `${sideLength}px`,
    height: `${sideLength}px`,
  };

  const polygonContainerStyle = {
    "--sides": sides,
  };

  return (
    <div className="polygon-container" style={polygonContainerStyle}>
      <div className="polygon" style={polygonStyle}></div>
    </div>
  );

}

Polygon.propTypes = {
  sideLength: PropTypes.number.isRequired,
  sides: PropTypes.number.isRequired,
};

export default Polygon;
