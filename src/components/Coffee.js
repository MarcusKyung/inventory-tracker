import React from "react";
import PropTypes from "prop-types";

function Coffee(props){
  return (
    <React.Fragment> 
      <div onClick = {() => props.whenCoffeeClicked(props.id)}> 
        <h3>{props.name} Coffee Beans</h3>
        <img src={props.productImage}/>
        <p>Country of Origin: {props.origin}</p>
        <p>Roast Type: {props.roast}</p>
        <p>Quantity: {props.quantity}</p>
        <p>Description: {props.description}</p>
        <p>Price: ${props.price}/bag</p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  description: PropTypes.string,
  roast: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  productImage: PropTypes.string,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func
};

export default Coffee;