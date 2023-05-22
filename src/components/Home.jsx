import React, {Text} from "react";
import Coffee from "./coffee"
import { API } from "aws-amplify";



function Home() {

  return (
    <div style={{backgroundColor: "#F0E4CE", textAlign: "center", alignItems: 'center', minHeight: "100vh", display: "flex", justifyContent: "start", flexDirection: "column"}}>
<h1>Database and Queries of Australia</h1>
  <p>A website dedicated to providing easy to access data about Australia</p>
      <br></br>
      <p style={{color:'red'}}>ToDo</p>
      List of APIs/Datasets to create
      <ol>
        <li>SA2/SA3/MESH Block to Latitude Longitude</li>
        <li>SA2/SA3/MESH Block Centres (Latitude Longitude)</li>
        <li>SA2/SA3/MESH Block/Latitude and Longitude/Postcode to Remoteness</li>
        <li>Postcode to Population</li>
        <li>SA2/SA3/MESH Block/Latitude and Longitude/Postcode to Population</li>
        <li>APIS/DATABASE section</li>
      </ol>
      <Coffee/>
      <h2>About Me</h2>
      <p>Check out my of my work at     <a href="https://www.beauhobba.com">Beau Hobba</a></p>
    </div>
  );
}


export default Home;
