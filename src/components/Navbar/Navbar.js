import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../../images/logo.png"
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import ToggleButton from '@material-ui/lab/ToggleButton';


const Navbar = () => {
const [isToggle, setIsToggle] = useState(false)
 const handleToggle = ()=>{
  const toggle = isToggle?false:true
  setIsToggle(toggle)
 }

  return (
    <div className="nav_bar d-flex justify-content-between">
      <img src={logo} className="img img-fluid" alt="" />

    
<div className='nav'>
     <div className="toggle"><ToggleButton value="left" aria-label="left aligned"  onClick={handleToggle}>
        <FormatAlignCenterIcon />
      </ToggleButton></div>  
        <ul style={{display:isToggle? 'none':'flex'}}><li>
          <Link to="/home">Home</Link>
        </li>
        <li >
          <Link to="/orders">Orders</Link>
        </li>
        <li >
          <Link to="/admin">Admin</Link>
        </li> 
      </ul></div>
    </div>
  );
};

export default Navbar;