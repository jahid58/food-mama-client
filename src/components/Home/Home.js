import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import FoodItem from "../FoodItem/FoodItem";
import "./Home.css";
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("https://blueberry-custard-77892.herokuapp.com/getFoods")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
        setIsLoading(false);
      });
  }, []);

  return (
   <div>
       
        <div className="home">
        {isLoading && <CircularProgress></CircularProgress>}
      {!isLoading && foods.map((dt) => <FoodItem key={dt._id} foodItem={dt}></FoodItem>)}
    </div>
   </div>
  );
};

export default Home;
