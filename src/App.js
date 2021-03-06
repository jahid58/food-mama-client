import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin/Admin";
import Checkout from "./components/Checkout/Checkout";
import Home from "./components/Home/Home";
import Login from "./components/LoginPage/Login";
import Navbar from "./components/Navbar/Navbar";
import Orders from "./components/Orders/Orders";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext([])
function App() {
const [user,setUser] = useState({})

  return (
  
      <UserContext.Provider value= {[user,setUser]}>
      <Router>
  <Route> 
     <Navbar></Navbar>
     </Route>
     <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
        </Switch>
    <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
        </Switch>
        <Switch>
          <Route path='/login'>
            <Login></Login>
          </Route>
        </Switch>
      
        <Switch>
          <PrivateRoute path='/checkout/:id'>
            <Checkout></Checkout>
          </PrivateRoute>
        </Switch>
        <Switch>
          <PrivateRoute path='/orders'>
            <Orders></Orders>
          </PrivateRoute>
        </Switch>
        
        <Switch>
          <PrivateRoute path='/admin'>
            <Admin></Admin>
          </PrivateRoute>
        </Switch>

      
      </Router>
      </UserContext.Provider>
     

  );
}

export default App;
