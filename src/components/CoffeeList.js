// This component displays a list of coffee items using the Coffee component. It maps through the coffeeList prop and renders each coffee item. It also includes error handling for when the coffeeList prop is empty or not an array.

import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

function CoffeeList(props){
    //Error handling
    if (!Array.isArray(props.coffeeList) || props.coffeeList.length === 0) {
        return <div>
                    <h3>No Coffee Available.</h3>
                </div>
    }
      
      
  return (
    <React.Fragment>
        {props.coffeeList.map((coffee) =>
          <Coffee 
            whenCoffeeClicked = { props.onCoffeeSelection }
            name={coffee.name}
            origin={coffee.origin}
            description={coffee.description}
            roast={coffee.roast}
            price={coffee.price}
            available={coffee.available}
            id={coffee.id}
            key={coffee.id}/>
        )}
        <br />
      </React.Fragment>
  );
}
CoffeeList.propTypes = {
  coffeeList: PropTypes.array, 
  onCoffeeSelection: PropTypes.func
};

export default CoffeeList;