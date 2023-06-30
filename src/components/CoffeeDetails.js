import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'

function CoffeeDetail(props){
  const { coffee, onClickingDelete, onRestockCoffee, onBuyCoffee} = props; 

  return (
    <Card className="card-rounded" style={{ width: '50rem', outline: '2px solid', background: 'grey' }}>      
      <Card.Img variant="top" src={coffee.productImage} alt="coffee image" />
      <Card.Body>
        <Card.Title>Coffee Detail</Card.Title>
        <Card.Subtitle>{coffee.name} Beans - from: {coffee.origin}</Card.Subtitle>
        <ul>
          <li>Roast: {coffee.roast}</li>
          <li>Description: {coffee.description}</li>
          <li>Price: {coffee.price}</li>
          <li>Quantity in Stock: {coffee.quantity > 0 ? coffee.quantity : "Out of Stock"}</li>
        </ul>
        <Button variant="primary" onClick={ props.onClickingEdit }>Update Coffee</Button>
        <Button variant="primary" onClick={()=> onClickingDelete(coffee.id) }>Delete Coffee</Button>
        <Button variant="primary" onClick={()=> onRestockCoffee(coffee.id)}>Restock Coffee + 130</Button>
        <Button variant="primary" onClick={()=> onBuyCoffee(coffee.id)}>Buy Coffee</Button>
      </Card.Body>
    </Card>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func, 
  onClickingEdit: PropTypes.func,
  onBuyCoffee: PropTypes.func,
  onRestockCoffee: PropTypes.func
};

export default CoffeeDetail;