import React, { useEffect, useState } from 'react';
import FoodList from './FoodList';
import './ManageFood.css'



const ManageFood = () => {
    const [foods,setFoods] = useState([])
    useEffect(()=>{
     fetch('https://blueberry-custard-77892.herokuapp.com/getFoods')
     .then(res=>res.json())
     .then(data=>setFoods(data))
    },[])

    return (
      <div className="manage">
        <div className="heading d-flex justify-content-between">
          <p>Name</p><p>Weight</p><p>Price</p><p>Action</p>
        </div>
          {
          foods.length &&
          foods.map(fd=><FoodList key={fd._id}food={fd}></FoodList>)
          }
      </div>

    );
};

export default ManageFood;