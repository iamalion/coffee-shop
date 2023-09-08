import React from "react";
import PropTypes from "prop-types";


function Coffee(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
        <h3>{props.name} - <em>{props.origin}</em></h3>
        <p><em></em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
    n
  };
  

export default Coffee;