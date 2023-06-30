import React from 'react'
import PropTypes from 'prop-types'
import Coffee from './Coffee'


function CoffeeList(props) {

  return (
    <React.Fragment>
      <hr />
      {props.coffeeList.map((coffee) => 
        <Coffee 
          name={coffee.name}
          origin={coffee.name}
          roast={coffee.name}
          price={coffee.name}
          description={coffee.name}
          quantity={coffee.name}
          productImage={coffee.productImage}
          id={item.id}
        />
      )}
    </React.Fragment>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
};

export default CoffeeList;