import React from "react";
import PropTypes from "prop-types";

function Coffee(props){
  return (
    <React.Fragment> 
      <div onClick = {() => props.whenCoffeeClicked(props.id)}> 
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
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
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func
};

export default Coffee;