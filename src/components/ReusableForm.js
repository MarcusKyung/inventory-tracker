import React from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <Container style={{ width: '75%', height: 'visualViewport' }}>
        <Form onSubmit={props.formSubmissionHandler}>
          <Form.Group controlId="name">
            <Form.Label>Coffee Bean Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter Coffee Bean Name" required />
          </Form.Group>
          <Form.Group controlId="origin">
            <Form.Label>Coffee Origin</Form.Label>
            <Form.Control type="text" name="origin" placeholder="Enter Coffee Rrigin" required />
          </Form.Group>
          <Form.Group controlId="roast">
            <Form.Label>Coffee Roast</Form.Label>
            <Form.Control type="text" name="roast" placeholder="Enter Coffee Roast" required />
          </Form.Group>
          <Form.Group controlId="price">
            <Form.Label>Coffee Price</Form.Label>
            <Form.Control type="number" name="price" placeholder="Enter Coffee Price" required />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Coffee Description</Form.Label>
            <Form.Control type="text" name="description" placeholder="Enter Coffee Description" required />
          </Form.Group>
          <Form.Group controlId="quantity">
            <Form.Label>Coffee Quantity</Form.Label>
            <Form.Control type="number" name="quantity" placeholder="Enter Coffee Quantity" required />
          </Form.Group>
          <Form.Group controlId="productImage">
            <Form.Label>Coffee Image</Form.Label>
            <Form.Control as="select" name="productImage" required>
              <option value="Coffee1.png">Image 1</option>
              <option value="Coffee2.png">Image 2</option>
              <option value="Coffee3.png">Image 3</option>
              <option value="Coffee4.png">Image 4</option>
            </Form.Control>
          </Form.Group>
          <Button variant="success" type="submit">{props.buttonText}</Button>
        </Form>
      </Container>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
