import React, { useContext, useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Button } from '@material-ui/core';
import { UserContext } from '../../App';
import './Checkout.css'


const Checkout = () => {
  const [user,setUser] = useContext(UserContext)
    const [orderDate,setOrderDate] = useState(new Date())
     const [item,setItem] = useState({})
     const {id} = useParams()

 useEffect(()=>{
   console.log(id)
    fetch("https://blueberry-custard-77892.herokuapp.com/checkedItem/"+id)
    .then(res=>res.json())
    .then(data=>setItem(data))
},[id])
const {foodName,price} = item
  const handlePlaceOrder=(e)=>{
    const orderInfo = {...user,orderDate,...item}
    console.log(id)
    fetch('https://blueberry-custard-77892.herokuapp.com/orderedInfo',{
      method:"POST",
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(orderInfo)
    })
    .then(res=>res.json())
    .then(result=>console.log(result))
    e.preventDefault()
  }

    
    return (
        <div >
           <h2 style={{margin:'50px'}}>Checkout</h2>
           <div className="foodInfo">
             <div className="heading d-flex justify-content-around m-3">
               <h6>Description</h6>
               <h6>Quantity</h6>
               <h6>Price</h6>
               </div>
               <div className="heading d-flex justify-content-around m-3">
               <h4>{foodName}</h4>
               <h4>1</h4>
               <h4>$ {price}</h4>
               </div>
           </div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Order date"
          value={orderDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
       
      </Grid>
      <Grid container justify="space-around">
        <Button onClick={handlePlaceOrder} variant="contained" color='secondary'>Place order</Button></Grid>
    </MuiPickersUtilsProvider>
    
        </div>
    );
};

export default Checkout;