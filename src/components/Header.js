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