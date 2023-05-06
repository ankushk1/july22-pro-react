import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Navbar = () => {
  return (
    <div className=" d-flex flex-column align-items-center mb-5 ">
      <div>
        <NavLink
          // className={({ isActive }) => (isActive ? "active" : "")}
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundColor: "rgb(221, 221, 221)",
                  borderRadius: "10px",
                  color: "rgb(255, 108, 108)"
                }
              : {}
          }
          to="/home"
        >
          Home
        </NavLink>
      </div>
      <div>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/signup"
        >
          Signup
        </NavLink>
      </div>
      <div>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
