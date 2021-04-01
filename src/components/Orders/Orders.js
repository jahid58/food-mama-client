import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
import './Orders.css'

const Orders = () => {
  const [total,setTotal] =useState(null)
    const [user,setUser] = useContext(UserContext)
    const history = useHistory()
    const [orders,setOrders] = useState([])
    useEffect(()=>{
        fetch('https://blueberry-custard-77892.herokuapp.com/orders?email='+user.email,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            }
        })
        .then(res=>res.json())
        .then(result=>{
            const totalPrice = result.reduce((total,item)=>{
                const sum = parseInt(item.price)
                 total = total + sum;
                 return total
            },0)
            setTotal(totalPrice)
            setOrders(result)    
        })
       
    },[history,user])


    return (
        <div>
           {
           orders.length && 
           <div className="order_page container">
               
               <div className="order_summary text-center">
                    <h3> Order Summary</h3>
                  
        <div className='order_item'> <div className="d-flex justify-content-between">
            <h6>Item </h6> 
         <h6> price </h6></div>
               {orders.map(item=>{
                    return <div className=" d-flex justify-content-between">
                        <p>{item.foodName}</p> <p>$ {item.price}</p>
                    </div>

                })}
               <div className="verdict d-flex justify-content-between"><h5>Total item: {orders.length}</h5> <h5 className="total"> Total Cost   :  $ {total}</h5></div>
               </div></div>
           </div>
           }
        </div>
    );
};

export default Orders;