import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Navbar = () => {
  return (
    <div className=" d-flex flex-column align-items-center mt-3 mb-5 ">
      <div>
        <NavLink
          // className={({ isActive }) => (isActive ? "active" : "")}
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundColor: "var(--bs-secondary-bg-subtle)",
                  borderRadius: "5px",
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
