import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../images/logo.png"
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <navbar className="nav_bar d-flex">
      <img src={logo} className="img img-fluid" alt="" />
      <ul className="d-flex">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/Orders">Orders</Link>
        </li>
        <li>
          <Link to="/Admin">Admin</Link>
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
    </navbar>
  );
};

export default Navbar;