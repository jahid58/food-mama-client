import React from "react";
import { Delete, Edit } from "@material-ui/icons";
import "./ManageFood.css";
import { useHistory } from "react-router";

const FoodList = (props) => {
  const { foodName, weight, price, _id } = props.food;
  const history = useHistory()
  const handleDelete = (e) => {
    fetch("https://blueberry-custard-77892.herokuapp.com/delete/" + _id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => history.push('/Home'));
      
  };
  return (
    <div className="item_info d-flex justify-content-between">
      <p>{foodName}</p>
      <p>{weight}</p>
      <p>{price}</p>
      <p style={{cursor:'pointer'}}>
        {" "}
        <Edit></Edit> <Delete onClick={handleDelete}></Delete>
      </p>
    </div>
  );
};

export default FoodList;
