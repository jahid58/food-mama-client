import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddFood.css'
const AddFood = () => {
    const [imgUrl,setImgUrl] = useState(null)
  const { register, handleSubmit,reset} = useForm();
  const handleImgUpload = (event) =>{
     const imageData = new FormData()
     imageData.set('key','70683316025569c31374cf8fe71b1764');
     imageData.append('image',event.target.files[0]);
     axios.post('https://api.imgbb.com/1/upload',imageData)
     .then(res=>setImgUrl(res.data.data.display_url))
  }

  const onSubmit = data => {
     const foodData ={
         foodName:data.name,
         price: data.price,
         weight:data.weight,
         image:imgUrl
     }
    fetch('https://blueberry-custard-77892.herokuapp.com/addFood',
    {
        method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(foodData)
    })
    .then(res=>console.log(res))
    reset({})
  };



  return (
    
    <div className="add_food">
      <form onSubmit={handleSubmit(onSubmit)} >
      <br/><br/>
      <input name="name" placeholder='Food Name' className='form-control input' type='text' ref={register({ required: true })} /> <br/><br/>
      
      <input name="weight" type='text' className='form-control input'  placeholder='weight' ref={register({ required: false })} /><br></br>
     
      <input name="price" type='number' className='form-control input'  placeholder='price' ref={register({ required: true })} /><br></br>
   
      <input name="image" type='file' className='upload_img'  onBlur={handleImgUpload} ref={register({ required: true })} />
      <input type="submit" value=' Save item' className='btn btn-success'/>
      
    </form>
    </div>
  )
}

export default AddFood;