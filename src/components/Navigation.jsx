import React from "react";
import { NavLink } from "react-router-dom";
import colors from "./Colours"

function Navigation() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        backgroundColor: colors.foothead,
      }}
    >
          <div>
            <NavLink to="/" style={{ paddingRight: 20, paddingLeft: 20, color: colors.txt }}>
              Home
            </NavLink>
            <NavLink to="/code" style={{ paddingRight: 20, color: colors.txt  }}>
              Code
            </NavLink>
            <NavLink to="/latitudelongitude" style={{ paddingRight: 20, color: colors.txt  }}>
              Latitude Longitude
            </NavLink>
            <NavLink to="/regioncentres" style={{ paddingRight: 20, color: colors.txt  }}>
              Centroids
            </NavLink>
          </div>

    </div>
  );
}

export default Navigation;
