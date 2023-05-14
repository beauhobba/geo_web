
import React, { useState } from "react";
import Coffee from "./coffee"
// -33.89575474841882, 151.20372411350206
function App() {
  const [lat, setLat] = React.useState(-42.880554);
  const [lon, setLon] = React.useState(147.324997);
  const [post, setPost] = React.useState(2000);

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
    // Set the post here
    // setPost(e.target.value)
  }


  return (
    <div style={{"background-color": "#9E5546", "text-align": "center", alignItems: 'center', "min-height": "100vh", "display": "flex", "justify-content": "center", "flex-direction": "column"}}>
      <div style={{"color": "#FAC71E", "fontSize": 40}}>
        <p>Latitude and Longitude to Postcode Converter</p>
      </div>
      <div style={{"color": "#FAC71E"}}>
        <form onSubmit={handle_post}>
          <label>
            Latitude:
            <input type="text" name="name" value={lat} onChange={handle_lat} style={{backgroundColor: "#FAC71E", borderColor: "#38202D", border: '0px', padding: 3}} />
          </label>
          <label>
            Longitude:
            <input type="text" name="name" value={lon} onChange={handle_lon} style={{backgroundColor: "#FAC71E", borderColor: "#38202D", border: '0px', padding: 3}} />
          </label>
          <input type="submit" value="Submit"  style={{backgroundColor: "#FAC71E", borderColor: "#38202D", padding: 3}} />
        </form>
      </div>

      <div style={{color: "#FAC71E", flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <p style={{width: "50%", paddingRight:10}}>Result: </p>
        <p style={{width: "50%"}}>{post} </p>
      </div>

      <div style={{"color": "#FAC71E", padding: 30}}>
        <label>API Access: Currently Not Available</label>
      </div>
        <Coffee/>

    </div>
  );
}

export default App;
