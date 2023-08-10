import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import ShapeRenderer from './ShapeRenderer';

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

  return (
    <Container>
      <Form 
        style={{marginBottom: "3rem"}}>
        <Form.Group controlId="shapeDescription">
          <Form.Label style={{marginRight: "1rem", color: "#a0b43b"}}><h1>Shape Description</h1></Form.Label>
          <Form.Control
            type="text"
            value={shapeDescription}
            onChange={(e) => setShapeDescription(e.target.value)}
            style={{marginRight: "1rem"}}
          />
          <Button variant="primary" onClick={handleSubmit}>Submit</Button>
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

