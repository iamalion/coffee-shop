import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
    const { coffee, onClickingDelete } = props;
    return (
        <React.Fragment>
            <hr/>
            <h1>Coffee Detail</h1>
    
            <h3>{coffee.name} - <em>{coffee.origin}</em></h3>
            <p>{coffee.roast} roast</p>
            <br />
            <p>{coffee.description}</p>
            <p></p>
            <br />
            <p><em>${coffee.price} per pound, {coffee.available} pounds available</em></p>
            <p><em></em></p>
            <br />
            <button className="btn" onClick={ props.onClickingEdit }>Edit</button> 
            <button className="btn" onClick={ props.onCoffeeSale }>Sell</button> 
            <button className="btn" onClick= { props.onCoffeeRestock }>Restock</button>
            <button className="btn" onClick={()=> onClickingDelete(coffee.id) }>Delete</button>
            <hr/>
        </React.Fragment>
    );
}
CoffeeDetail.propTypes = {
    coffee: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func,
    onCoffeeSale: PropTypes.func
};  

export default CoffeeDetail;