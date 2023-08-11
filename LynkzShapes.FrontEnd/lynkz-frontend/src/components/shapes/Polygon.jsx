import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation

// come back to this for DRY. There's no need for some many polygons with the same prop.
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
