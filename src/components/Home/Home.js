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
    <div className="home">
      <div className="header">
        <h2>
          Our Passion For <br /> Delicious Food
        </h2>
        <div className="about">
          <div className='info'>
            <h4>
            High Quality</h4>
      
            <p>
              We provide the highest quality of prepared meals at a great value
              in a home like and friendly environment
            </p>
          </div>
          <div className='info'>
            <h4> Best Recipes  </h4>
            <p>We use cookies and similar tracking and storage technology on our our site to enhance your user experience </p>
          
            </div>
            <div className='info'><h4>
           
           Real Taste</h4>
            <p>
              A light sour wheat dough with roasted walnuts and freshly  picked rosemary .thyme, poppy seeds,parsley and sage
            </p></div>
      </div>
        
      </div>
      <div className="dishes">
        {isLoading && <CircularProgress></CircularProgress>}
        {!isLoading &&
          foods.map((dt) => <FoodItem key={dt._id} foodItem={dt}></FoodItem>)}
      </div>
    </div>
  );
};

export default Home;
