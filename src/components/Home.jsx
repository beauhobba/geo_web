import React, { Text } from "react";
import Coffee from "./coffee";
import { API } from "aws-amplify";


function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: "#5CDB95",
      }}
    >
      <div
        style={{
          textAlign: "center",
          alignItems: "center",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "start",
          flexDirection: "column",
          padding: 20,
        }}
      >
        <h1
          style={{ color: "#EDF5E1", fontSize: 50, fontFamily: "sans-serif" }}
        >
          DATABASE AND QUERIES
          <br />
          OF AUSTRAIA
        </h1>
        <p style={{ color: "#EDF5E1" }}>
          A website dedicated to providing easy to access data about Australia
          <br />
          Statistics are created using all python scripts located here:{" "}
          <a href="https://github.com/beauhobba/Database-Tools">
            Geo Database Tools
          </a>
        </p>
        <div style={{ color: "#EDF5E1" }}>
          <br></br>
          <p style={{ color: "red" }}>ToDo</p>
          <ol>
            <li>SA2/SA3/MESH Block to Latitude Longitude</li>
            <li>SA2/SA3/MESH Block Centres (Latitude Longitude)</li>
            <li>
              SA2/SA3/MESH Block/Latitude and Longitude/Postcode to Remoteness
            </li>
            <li>Postcode to Population</li>
            <li>
              SA2/SA3/MESH Block/Latitude and Longitude/Postcode to Population
            </li>
            <li>APIS/DATABASE section</li>
          </ol>
        </div>
      </div>

      <div
        style={{
          padding: 20,
          color: "#EDF5E1",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>About Me</h2>
        <p>
          Check out my work at{" "}
          <a href="https://www.beauhobba.com">Beau Hobba</a>
        </p>
        <Coffee />
      </div>
    </div>
  );
}

export default Home;
