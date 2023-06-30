import React from "react";
import CoffeeList from "./CoffeeList";
import CoffeeDetails from "./CoffeeDetails";
import NewCoffeeForm from "./NewCoffeeForm";
import EditCoffeeForm from "./EditCoffeeForm";

class CoffeeControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [],
      selectedCoffee: null,
      editing: false
    };
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
  
    if () {      
      currentlyVisibleState = <EditCoffeeForm/>
      buttonText = "Return to Coffee List";
    } else if () {
      currentlyVisibleState = <CoffeeDetails/>
      buttonText = "Return to Coffee List";
    } else if () {
      currentlyVisibleState = <NewCoffeeForm/>;
      buttonText = "Return to Coffee List"; 
    } else {
      currentlyVisibleState = <CoffeeList/>;
      buttonText = "Add Coffee"; 
    }
    return (
    <React.Fragment>
      {currentlyVisibleState}
    </React.Fragment>
  );
  }
}

export default CoffeeControl;