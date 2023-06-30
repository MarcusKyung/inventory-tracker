import React from "react";
import PropTypes from "prop-types";
import { ButtonGroup, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Row } from "react-bootstrap";

function CoffeeDetail(props){
  const { coffee, onClickingDelete, onRestockCoffee, onBuyCoffee} = props; 

  return (
    <Row className="justify-content-center">
      <Card style={{ width: '35rem', outline: '2px solid', background: 'lightGrey' }}>      
        <Card.Img className="rounded" variant="top" src={coffee.productImage} alt="coffee image" style = {{ marginTop: 10, outline: "1px solid"}}/>
        <Card.Body>
          <Card.Title>Coffee Detail</Card.Title>
          <Card.Subtitle>{coffee.name} Beans - from: {coffee.origin}</Card.Subtitle>
          <ul>
            <li>Roast: {coffee.roast}</li>
            <li>Description: {coffee.description}</li>
            <li>Price: {coffee.price}</li>
            <li>Quantity in Stock: {coffee.quantity > 0 ? coffee.quantity : "Out of Stock"}</li>
          </ul>
          <ButtonGroup>
            <Button variant="success" onClick={ props.onClickingEdit }>Update Coffee</Button>
            <Button variant="success" onClick={()=> onClickingDelete(coffee.id) }>Delete Coffee</Button>
            <Button variant="success" onClick={()=> onRestockCoffee(coffee.id)}>Restock Coffee + 130</Button>
            <Button variant="success" onClick={()=> onBuyCoffee(coffee.id)}>Buy Coffee</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </Row>
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