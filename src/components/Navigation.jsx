import React from "react";
import { NavLink } from "react-router-dom";
import colors from "./Colours"

function Navigation() {
  const nav_link_style =  { paddingRight: 20, paddingLeft: 20, color: colors.txt,  textDecoration: 'none' }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        backgroundColor: colors.foothead,
        paddingBottom: 10,
        paddingTop: 10
      }}
    >
          <div>
            <NavLink to="/" style={nav_link_style}>
              Home
            </NavLink>
            <NavLink to="/code" style={nav_link_style}>
              Code
            </NavLink>
            <NavLink to="/postcode" style={nav_link_style}>
              Postcode
            </NavLink>
            <NavLink to="/centres" style={nav_link_style}>
              Centroids
            </NavLink>
            <NavLink to="/sport" style={nav_link_style}>
              Sport
            </NavLink>
          </div>

    </div>
  );
}

export default Navigation;
