import React from "react";
import PropTypes from "prop-types";

function Coffee(props){
  return (
    <React.Fragment> 
      <div onClick = {() => props.whenCoffeeClicked(props.id)}> 
        <h3 style={{textAlign: "center" , marginTop: "10px"}}>{props.name} Coffee Beans</h3>
        <img src={props.productImage} style={{ display: 'block', margin: '0 auto' }}/>
        <p><b>Country of Origin:</b> {props.origin}</p>
        <p><b>Roast Type:</b> {props.roast}</p>
        <p><b>Quantity:</b> {props.quantity}</p>
        <p><b>Description:</b> {props.description}</p>
        <p><b>Price:</b> ${props.price}/bag</p>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  roast: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  productImage: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func
};

export default Coffee;