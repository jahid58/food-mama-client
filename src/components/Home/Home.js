import React, { useEffect, useState } from "react";
import FoodItem from "../FoodItem/FoodItem";
const Home = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("https://blueberry-custard-77892.herokuapp.com/getFoods")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "30px",
        justifyContent: "center",
        backgroundColor: "whitesmoke",
      }}
    >
      {foods.length && foods.map((dt) => <FoodItem foodItem={dt}></FoodItem>)}
    </div>
  );
};

export default Home;
