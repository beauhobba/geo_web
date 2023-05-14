
import React, { useState } from "react";
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
    <div style={{"background-color": "#282c34", "text-align": "center", "min-height": "100vh", "display": "flex", "justify-content": "center", "flex-direction": "column"}}>
      <div style={{"color": "white", "fontSize": 40}}>
        <p>Latitude and Longitude to Postcode Converter</p>
      </div>
      <div style={{"color": "white"}}>
        <form onSubmit={handle_post}>
          <label>
            Latitude:
            <input type="text" name="name" value={lat} onChange={handle_lat} />
          </label>
          <label>
            Longitude:
            <input type="text" name="name" value={lon} onChange={handle_lon} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>

      <div style={{"color": "white"}}>
        <label>Result: {post}</label>
      </div>
    </div>
  );
}

export default App;
