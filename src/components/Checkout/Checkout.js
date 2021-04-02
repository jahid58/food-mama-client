import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Button } from "@material-ui/core";
import { UserContext } from "../../App";
import "./Checkout.css";

const Checkout = () => {
  const [user, setUser] = useContext(UserContext);
  const [orderDate, setOrderDate] = useState(new Date());
  const history = useHistory();
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch("https://blueberry-custard-77892.herokuapp.com/checkedItem/" + id)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);
  const { foodName, price } = item;
  const handlePlaceOrder = (e) => {
    const orderInfo = { ...user, orderDate:orderDate, orderFood:item };

  if(item.foodName){
    fetch("https://blueberry-custard-77892.herokuapp.com/orderedInfo", {
    
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((result) => history.push("/orders"));
  }
  };

  return (
    <div className="body">
      <h2>Checkout</h2>
      <div className="foodInfo text-center p-5">
        <div className="heading d-flex justify-content-around m-3">
          <h6>Description</h6>
          <h6>Quantity</h6>
          <h6>Price</h6>
        </div>
        <div className="d-flex justify-content-around m-3">
          <h4>{foodName}</h4>
          <h4>1</h4>
          <h4>$ {price}</h4>
        </div>
      </div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container>
          <KeyboardDatePicker
            disableToolbar
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Order date"
            value={orderDate}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </Grid>
        <Grid container>
          <Button
            onClick={handlePlaceOrder}
            variant="contained"
            color="secondary"
          >
            Place order
          </Button>
        </Grid>
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default Checkout;
