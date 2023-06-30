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
      mainCoffeeList: [
        {name: "Arabica",
        origin: "Guatemala",
        roast: "light",
        price: 5,
        description: "Arabica beans are known for their delicate flavor, pleasant acidity, and nuanced taste profiles. They often exhibit notes of fruit, berries, chocolate, and flowers. Arabica beans have a lower caffeine content compared to other varieties.",
        quantity: 130,
        productImage: red,
        id: v4(),
        },
        {name: "Robusta",
        origin: "Brazil",
        roast: "dark",
        price: 10,
        description: "Robusta beans are known for their strong and bold flavor, higher caffeine content, and bitterness. They often have a full-bodied and earthy taste with hints of chocolate and nuts. Robusta beans are commonly used in espresso blends and instant coffee.",
        quantity: 130,
        productImage: red,
        id: v4(),
        },
        {name: "Excelsa",
        origin: "Philippines",
        roast: "medium-dark",
        price: 15,
        description: "Excelsa beans are less commonly known and have a unique flavor profile. They are often described as having a tart and fruity taste with notes of dark fruit, floral undertones, and a hint of smokiness. Excelsa beans have a moderate caffeine content.",
        quantity: 130,
        productImage: red,
        id: v4(),
        },
        {name: "Liberica",
        origin: "Malaysia",
        roast: "medium-dark",
        price: 20,
        description: "Liberica beans have a distinct and bold flavor profile. They often have a woody and smoky taste with floral and fruity undertones. Liberica beans are characterized by their large size and irregular shape. They have a unique aroma and are known for their low acidity.",
        quantity: 130,
        productImage: red,
        id: v4(),
        },
      ],
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