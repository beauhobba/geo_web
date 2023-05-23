import React from "react";
import { NavLink } from "react-router-dom";



function Navigation() {
  return (
    <div style={{display: 'flex', flexDirection: 'row', width: '100%', backgroundColor: '#8EE4AF'}} >
      <nav style={{
      backgroundColor: '#8EE4AF',
    }}>
        <div className="container">
          <div>

                <NavLink to="/" style={{paddingRight: 20, paddingLeft: 20}}>
                  Home
                </NavLink>

                <NavLink  to="/latitudelongitude" style={{paddingRight: 20}}>
                  Latitude Longitude
                </NavLink>
                <NavLink  to="/regioncentres" style={{paddingRight: 20}}>
                  Region Centres
                </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
