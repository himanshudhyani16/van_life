import React from "react";
import { Link, NavLink } from "react-router-dom";

const AppHeader = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "none",
    color: "#FF8C38",
  };
  return (
    <>
      <header>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          className="site-logo activeStyle"
          to="/"
        >
          #VANLIFE
        </NavLink>
        <nav>
          <NavLink
            to="/host"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className={"activeStyle"}
          >
            Host
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className={"activeStyle"}
          >
            About
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="/vans"
            className={"activeStyle"}
          >
            Vans
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default AppHeader;
