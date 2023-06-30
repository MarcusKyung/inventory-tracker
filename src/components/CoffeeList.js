import React from 'react';
import PropTypes from 'prop-types';
import Coffee from './Coffee';
import { Card, Container, Row, Col } from 'react-bootstrap';

function CoffeeList(props) {
  return (
    <React.Fragment>
      <Container>
        <Row>
          {props.coffeeList.map((coffee) => (
            <Col key={coffee.id} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <Coffee
                  whenCoffeeClicked={props.onCoffeeSelection}
                  name={coffee.name}
                  origin={coffee.origin}
                  roast={coffee.roast}
                  price={coffee.price}
                  description={coffee.description}
                  quantity={coffee.quantity > 0 ? coffee.quantity : 'Out of Stock'}
                  productImage={coffee.productImage}
                  id={coffee.id}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSelection: PropTypes.func,
};

export default CoffeeList;
