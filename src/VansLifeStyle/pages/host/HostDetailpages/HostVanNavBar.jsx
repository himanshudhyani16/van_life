import React from "react";
import { NavLink } from "react-router-dom";

const HostVanNavBar = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "none",
    color: "#FF8C38",
  };
  return (
    <>
      <nav className="host-van-detail-nav">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="."
          end
        >
          Details
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="pricing"
        >
          Pricing
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="photos"
        >
          Photos
        </NavLink>
      </nav>
    </>
  );
};

export default HostVanNavBar;
