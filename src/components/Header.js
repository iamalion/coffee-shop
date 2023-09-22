//This component is the header of the application, displaying the title and an add button. It receives a prop called buttonText that is used to label the button. It also receives a prop called onAddButtonClick that is used to handle the click event on the button. This component is rendered in the CoffeeControl component.

import React from "react";
import Button from "./Button";

function Header(props){
    
  return (
    
      <header className="header">
        <h1>JavaScript Joe's Java Shop</h1>
        <Button className="btn-black btn" onClick={props.onAddButtonClick} label={props.buttonText} />
      </header>
      
      
    
  );
}

export default Header;