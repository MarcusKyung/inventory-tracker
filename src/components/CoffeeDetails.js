import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function CoffeeDetail(props){
  const { coffee, onClickingDelete } = props; 

  return (
    <Card className="card-rounded" style={{ width: '25rem', outline: '2px solid', background: 'grey' }}>      
      <Card.Img variant="top" src={coffee.productImage} alt="coffee image" />
      <Card.Body>
        <Card.Title>Coffee Detail</Card.Title>
        <Card.Subtitle>{coffee.name} Beans - from: {coffee.origin}</Card.Subtitle>
        <ul>
          <li>Roast: {coffee.roast}</li>
          <li>Description: {coffee.description}</li>
          <li>Price: {coffee.price}</li>
          <li>Quantity in Stock: {coffee.quantity}</li>
        </ul>
        <Button variant="primary" onClick={ props.onClickingEdit }>Update Coffee</Button>
        <Button variant="primary" onClick={()=> onClickingDelete(coffee.id) }>Delete Coffee</Button>
      </Card.Body>
    </Card>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func, 
  onClickingEdit: PropTypes.func
};

export default CoffeeDetail;