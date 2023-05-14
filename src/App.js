import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
// -33.89575474841882, 151.20372411350206
function App() {
  const [lat, setLat] = React.useState(-42.880554);
  const [lon, setLon] = React.useState(147.324997);
  const [post, setPost] = React.useState(2000);


  function handle_lat(e){
    e.preventDefault();
    setLat(e.target.value)
  }; 
  function handle_lon(e){
    e.preventDefault();
    setLon(e.target.value)
  }; 

  function handle_post(e){
    e.preventDefault();
    // Set the post here 
    // setPost(e.target.value)
  }; 

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Latitude and Longitude to Postcode Converter
        </p>

<form onSubmit={handle_post}>
<label>
    Latitude:
    <input type="text" name="name" value={lat} onChange={handle_lat} />
  </label>
<label>
  Longitude: 
    <input type="text" name="name" value={lon} onChange={handle_lon}  />
  </label>
  <input type="submit" value="Submit" />
</form >


<label>
  Result: {post}
  </label>
      </header>
    </div>
  );
}

export default App;
