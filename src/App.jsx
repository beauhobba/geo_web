
import React, { useState } from "react";
import Coffee from "./coffee"
// -33.89575474841882, 151.20372411350206
function App() {
  const [lat, setLat] = React.useState(-42.880554);
  const [lon, setLon] = React.useState(147.324997);
  const [post, setPost] = React.useState(2000);
  const [locality, setLocality] = React.useState('Sydney');
  const [state, setState] = React.useState('NSW');




  function handle_lat(e) {
    e.preventDefault();
    setLat(e.target.value);
  }
  function handle_lon(e) {
    e.preventDefault();
    setLon(e.target.value);
  }

  function handle_post(e) {
    e.preventDefault();
    setPost('Cannot process result yet')
  }


  return (
    <div style={{"background-color": "#F0E4CE", "text-align": "center", alignItems: 'center', "min-height": "100vh", "display": "flex", "justify-content": "center", "flex-direction": "column"}}>
      <div style={{"color": "#396BA8", "fontSize": 40}}>
        <p>Latitude and Longitude Converter Australia</p>
      </div>
      <div style={{color: "#396BA8", justifyContent: 'center', display: 'flex', flexDirection: 'row', width: '100%', padding: 5}}>
        <form onSubmit={handle_post}>
        <label style={{paddingRight: 5}}>
            Latitude:
            <input type="text" name="name" value={lat} onChange={handle_lat} style={{width: '20%', backgroundColor: "#E08886", borderColor: "#E08886", border: '0px'}} />
          </label>
          <label style={{paddingRight: 5}}>
            Longitude:
            <input type="text" name="name" value={lon} onChange={handle_lon} style={{width: '20%',backgroundColor: "#E08886", borderColor: "#E08886", border: '0px'}} />
          </label>
          <input type="submit" value="Submit"  style={{backgroundColor: "#E08886", borderColor: "#E08886"}} />
        </form>
      </div>

      <div style={{color: "#396BA8", flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <p style={{width: "50%", paddingRight:10}}>Result: </p>
        <p style={{width: "25%"}}>{post} </p>
        <p style={{width: "25%"}}>{locality} </p>
        <p style={{width: "25%"}}>{state} </p>
      </div>

      <div style={{"color": "#396BA8", padding: 30}}>
        <label>API Access: Currently Not Available</label>
      </div>
        <Coffee/>

    </div>
  );
}

export default App;
