import { Button } from "@material-ui/core";
import React from "react";

import { Link } from "react-router-dom";

import "./Food.css";
const FoodItem = (props) => {
  const { foodName, price, image, weight,_id } = props.foodItem;
  
  
 
  return (
    <div className="food pb-2 m-3">
      <img src={image} alt="" />
      <h4>
        {foodName} - {weight}
      </h4>
      <div className="d-flex mt-3 w-100 d-flex justify-content-around">
        <h4>price:$ {price}</h4>{" "}
        <Link to={`/checkout/${_id}`}>  <Button  variant="contained" color="primary">
            Buy now
        </Button> </Link>
      
      </div>
    </div>
  );
};

export default FoodItem;
