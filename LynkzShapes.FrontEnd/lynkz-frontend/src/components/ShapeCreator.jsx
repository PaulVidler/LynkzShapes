import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import ShapeRenderer from './ShapeRenderer';

const ShapeCreator = () => {
  const [shapeDescription, setShapeDescription] = useState('');
  const [shapeType, setShapeType] = useState('');
  const [shapeDimensions, setShapeDimensions] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [isCustomOption, setIsCustomOption] = useState(false);

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
      setErrorMessage("Something has gone wrong, potentially a backend problem");
    }
  };

  const handleSelectChange = (selectedOption) => {
    if (selectedOption === 'custom') {
      setIsCustomOption(true);
    } else {
      setIsCustomOption(false);
      setShapeDescription(selectedOption);
    }
  };

  const handleCustomInputChange = (e) => {
    setShapeDescription(e.target.value);
  };

  return (
    <Container>
      <Form style={{ marginBottom: '3rem' }}>
        <Form.Group controlId="shapeDescription">
          <Form.Label style={{ marginRight: '1rem', color: '#a0b43b' }}>
            <h1>Shape Description</h1>
          </Form.Label>
          <InputGroup style={{
                paddingBottom: "1rem",
            }}>
            <Form.Control
              as="select"
              value={isCustomOption ? 'custom' : shapeDescription}
              onChange={(e) => handleSelectChange(e.target.value)}
            >
                <option value="">Select an option...</option>
                <option value="custom">Custom...</option>
                <optgroup label="Supplied examples">
                    <option value="Draw a circle with a radius of 100">Draw a circle with a radius of 100</option>
                    <option value="Draw a square with a side length of 200">Draw a square with a side length of 200</option>
                    <option value="Draw a rectangle with a width of 250 and a height of 400">Draw a rectangle with a width of 250 and a height of 400</option>
                    <option value="Draw an octagon with a side length of 150">Draw an octagon with a side length of 150</option>
                    <option value="Draw an isosceles triangle with a height of 200 and a width of 100">Draw an isosceles triangle with a height of 200 and a width of 100</option>
                </optgroup>
                <optgroup label="Other Options">
                <option value="Draw a square with a side of 400">draw a square with a side of 400</option>
                <option value="Draw an heptagon with a side length of 100">Draw an heptagon with a side length of 100</option>
                <option value="Draw an octagon with a side length of 120">Draw an octagon with a side length of 120</option>
                <option value="Draw an Pentagon with a side length of 150">Draw an Pentagon with a side length of 150</option>
                <option value="Draw an Hexagon with a side length of 150">Draw an Hexagon with a side length of 150</option>
                <option value="Draw an equilateral triangle with a width of 300">Draw an equilateral triangle with a width of 300</option>
                <option value="Draw a isosceles triangle with a width of 200 and height of 300">Draw a isosceles triangle with a width of 200 and height of 300</option>
                <option value="Draw me an oval with a width of 200 and height of 300">Draw me an oval with a width of 200 and height of 300</option>
                <option value="Draw me a rectangle with a width of 200 and height of 300">Draw me a rectangle with a width of 200 and height of 300</option>
                <option value="Draw me a parallelogram with a width of 400 and height of 300 and skew of 30 degrees">Draw me a parallelogram with a width of 400 and height of 300 and skew of 30 degrees</option>
                <option value="Draw me a scalene triangle with side A of 200 and side B of 300 and side C of 400">Draw me a scalene triangle with side A of 200 and side B of 300 and side C of 400</option>
                <option value="Draw a circle with a radius of 200">Draw a circle with a radius of 200</option>
                <option value="Draw a circle with a diameter of 200">Draw a circle with a diameter of 200</option>
                </optgroup>
                </Form.Control>
                {isCustomOption && (
                <FormControl
                    type="text"
                    value={shapeDescription}
                    onChange={handleCustomInputChange}
                    placeholder="Enter custom shape description..."
                />
                )}
            </InputGroup>
            <Button
                variant="primary"
                onClick={handleSubmit}
                style={{
                    backgroundColor: "#a0b43b",
                    fontWeight: "bold",
                    border: "none",  // Remove the default border
                    boxShadow: "0px 0px 5px rgba(160, 180, 59, 0.5)",  // Add a lighter box shadow
                }}
                >
                Submit
            </Button>
        </Form.Group>
      </Form>
      <ShapeRenderer
        shapeType={shapeType}
        shapeDimensions={shapeDimensions}
        errorMessage={errorMessage}
      />
    </Container>
  );
};

export default ShapeCreator;
