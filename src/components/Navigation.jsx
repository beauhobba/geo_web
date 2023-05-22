import React from "react";
import { NavLink } from "react-router-dom";



function Navigation() {
  return (
    <div style={{display: 'flex', flexDirection: 'row', width: '100%', backgroundColor: '#EDEDED'}} >
      <nav className="navbar navbar-expand navbar-light"  style={{
      backgroundColor: '#EDEDED',
    }}>
        <div className="container">
          <div>

                <NavLink to="/" style={{paddingRight: 20, paddingLeft: 20}}>
                  Home
                </NavLink>

                <NavLink  to="/latitudelongitude" style={{paddingRight: 20}}>
                  Latitude Longitude
                </NavLink>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
