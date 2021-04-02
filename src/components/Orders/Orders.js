import { Button } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../App";
import "./Orders.css";

const Orders = () => {
  const [total, setTotal] = useState(null);
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(
      "https://blueberry-custard-77892.herokuapp.com/orders?email=" +
        user.email,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        const totalPrice = result.reduce((total, item) => {
          const sum = parseInt(item.price);
          total = total + sum;
          return total;
        }, 0);

        setTotal(parseInt(totalPrice));
        setOrders(result);
      });
  }, [history, user]);

  return (
    <div>
      {orders.length && (
        <div className="order_page g-5 row  bg-light  mx-5">
          <div className="payment col-md-5 col-sm-12 p-5 text-center">
            <h4>Payment methods</h4>

            <div className="methods">
              <img
                src="https://thefinancialexpress.com.bd/uploads/1582526459.jpg"
                alt=""
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png"
                alt=""
              />
              <img
                src="https://avatars.githubusercontent.com/u/7192348?v=4"
                alt=""
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png"
                alt=""
              />
              <Button variant="contained" color="primary">
                {" "}
                Make Your Payment
              </Button>
            </div>
          </div>

          <div className="order_summary text-center col-md-7 col-sm-12 p-5">
            <h3> Order Summary</h3> <h5>ordered item: {orders.length}</h5>

            <div className="order_item">
             
              {orders.map((item,i) => {
                return (
                  <div className=" d-flex justify-content-between">
                    <p>{i+1} . {item.foodName}</p> <p>$ {item.price}</p>
                  </div>
                );
              })}
              <div className="verdict d-flex justify-content-between">
                <div><h5>Total </h5><br/>
                <h5>DisCount</h5><br/><h5>Total Cost</h5>
                </div>{" "}
               <div className="total"> 
                 <h5>  $ {total}</h5><br/>
               <h5>$ {Math.round(total*.1)}</h5><br/>
               <h5>$ {Math.round(total*.9)}</h5>
               </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
