import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee, onClickingDelete } = props; 

  return (
    <React.Fragment>
      <h1>Coffee Detail</h1>
      <h3>{coffee.name} - {coffee.origin}</h3>
      <p>Roast: {coffee.roast}</p>
      <p>Description: {coffee.description}</p>
      <p>Price: {coffee.price}</p>
      <p>Quantity in Stock: {coffee.quantity}</p>
      <img src={coffee.productImage} alt="coffee image" />
      <button onClick={ props.onClickingEdit }>Update Coffee</button>
      <button onClick={()=> onClickingDelete(coffee.id) }>Close Coffee</button>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func, 
  onClickingEdit: PropTypes.func
};

export default CoffeeDetail;