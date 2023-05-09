import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
    const activeStyle = {
      fontWeight: "bold",
      textDecoration: "none",
      color: "#FF8C38",
    };
  return (
    <>
      <nav className="host-nav">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          // className={({ isActive }) => (isActive ? "activeStyle2" : null)}
          end
          to="."
          // to="/host"
        >
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="income"
        >
          Income
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="vans"
        >
          Vans
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="review"
        >
          Review
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
