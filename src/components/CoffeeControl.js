import React from "react";
import CoffeeList from "./CoffeeList";
import CoffeeDetails from "./CoffeeDetails";
import NewCoffeeForm from "./NewCoffeeForm";
import EditCoffeeForm from "./EditCoffeeForm";
import { v4 } from 'uuid';
import Coffee1 from './../img/Coffee1.png';
import Coffee2 from './../img/Coffee2.png';
import Coffee3 from './../img/Coffee3.png';
import Coffee4 from './../img/Coffee4.png';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import { ButtonGroup } from "react-bootstrap";

class CoffeeControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [
        {name: "Arabica",
        origin: "Guatemala",
        roast: "Light",
        price: 5,
        description: "Arabica beans are known for their delicate flavor, pleasant acidity, and nuanced taste profiles. They often exhibit notes of fruit, berries, chocolate, and flowers. Arabica beans have a lower caffeine content compared to other varieties.",
        quantity: 1,
        productImage: Coffee1,
        id: v4(),
        },
        {name: "Robusta",
        origin: "Brazil",
        roast: "Dark",
        price: 10,
        description: "Robusta beans are known for their strong and bold flavor, higher caffeine content, and bitterness. They often have a full-bodied and earthy taste with hints of chocolate and nuts. Robusta beans are commonly used in espresso blends and instant coffee.",
        quantity: 130,
        productImage: Coffee2,
        id: v4(),
        },
        {name: "Excelsa",
        origin: "Philippines",
        roast: "Medium-dark",
        price: 15,
        description: "Excelsa beans are less commonly known and have a unique flavor profile. They are often described as having a tart and fruity taste with notes of dark fruit, floral undertones, and a hint of smokiness. Excelsa beans have a moderate caffeine content.",
        quantity: 130,
        productImage: Coffee3,
        id: v4(),
        },
        {name: "Liberica",
        origin: "Malaysia",
        roast: "Medium-dark",
        price: 20,
        description: "Liberica beans have a distinct and bold flavor profile. They often have a woody and smoky taste with floral and fruity undertones. Liberica beans are characterized by their large size and irregular shape. They have a unique aroma and are known for their low acidity.",
        quantity: 130,
        productImage: Coffee4,
        id: v4(),
        },
      ],
      selectedCoffee: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleEditClick = () => { 
    this.setState({editing: true}); 
  }

  handleDeletingCoffee = (id) => { 
    const newMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !== id); 
    this.setState({
      mainCoffeeList: newMainCoffeeList, 
      selectedCoffee: null 
    })
  }

  handleAddingNewCoffeeToList = (newCoffee) => { 
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee); 
    this.setState({mainCoffeeList: newMainCoffeeList,
                  formVisibleOnPage: false });
  } 

  handleEditingCoffeeInList = (coffeeToEdit) => {
    const editedMainCoffeeList = this.state.mainCoffeeList 
      .filter(coffee => coffee.id !== this.state.selectedCoffee.id)
      .concat(coffeeToEdit);
    this.setState({
        mainCoffeeList: editedMainCoffeeList,
        editing: false, 
        selectedCoffee: null 
      });
  }  

  handleChangingSelectedCoffee = (id) => {
    const selectedCoffee = this.state.mainCoffeeList.find(coffee => coffee.id === id);
    this.setState({ selectedCoffee });
  }

  handleBuyCoffee = (id) => {
    const selectedCoffee = this.state.mainCoffeeList.find(coffee => coffee.id === id);
    if (selectedCoffee.quantity > 0) {
      selectedCoffee.quantity = selectedCoffee.quantity - 1;
      this.setState({ selectedCoffee });
    }
  }

  handleRestockCoffee = (id) => {
    const selectedCoffee = this.state.mainCoffeeList.find(coffee => coffee.id === id);
    selectedCoffee.quantity = selectedCoffee.quantity + 130;
    this.setState({ selectedCoffee });
  }

  handleRandomCoffee = () => {
    const randomIndex = Math.floor(Math.random() * this.state.mainCoffeeList.length);
    const randomCoffee = this.state.mainCoffeeList[randomIndex];
    this.setState({
      selectedCoffee: randomCoffee
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
  
    if (this.state.editing) {      
      currentlyVisibleState = <EditCoffeeForm coffee = {this.state.selectedCoffee} onEditCoffee = {this.handleEditingCoffeeInList}/>
      buttonText = "Return to Coffee List";
    } else if (this.state.selectedCoffee != null) {
      currentlyVisibleState = <CoffeeDetails coffee={this.state.selectedCoffee} onClickingDelete={this.handleDeletingCoffee} onClickingEdit={this.handleEditClick} onBuyCoffee={this.handleBuyCoffee} onRestockCoffee={this.handleRestockCoffee}/>
      buttonText = "Return to Coffee List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffeeToList}/>;
      buttonText = "Return to Coffee List"; 
    } else {
      currentlyVisibleState = <CoffeeList onCoffeeSelection={this.handleChangingSelectedCoffee} coffeeList={this.state.mainCoffeeList} />;
      buttonText = "Add Coffee"; 
    }
    return (
    <React.Fragment>
      {currentlyVisibleState}
      <br />
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" onClick={this.handleRandomCoffee}>Random Coffee</Button>
        <Button onClick={this.handleClick} style={{ display: 'block', margin: '0 auto' }}>{buttonText}</Button>
      </ButtonGroup>
    </React.Fragment>
  );
  }
}

export default CoffeeControl;