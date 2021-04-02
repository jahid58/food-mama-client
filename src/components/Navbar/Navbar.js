import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../images/logo.png"
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div className="nav_bar d-flex">
      <img src={logo} className="img img-fluid" alt="" />
      <ul className="d-flex">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/orders">Orders</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          {user.name ? (
           user.name
          ) : (
            <Link to="/login">
              {" "}
              <button className="btn btn-success">Login</button>
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;