import React, { Text } from "react";
import Coffee from "./CoffeeBuy";
import colors from "./Colours"
import Graph from "./Graph"

function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: colors.bkg,
        minHeight: '100vh'
      }}
    >
      <div
        style={{
          textAlign: "center",
          alignItems: "center",
          display: "flex",
          justifyContent: "start",
          flexDirection: "column",
          padding: 20,
        }}
      >
        <h1
          style={{ color: colors.txt, fontSize: 50, fontFamily: "sans-serif" }}
        >
          DATABASE AND QUERIES
          <br />
          OF AUSTRAIA
        </h1>
        <p style={{ color: colors.txt_2 }}>
          This website is dedicated to providing easy to access and <b>free</b> Australian data
          <br />
          Last Updated: <b>7/6/2023</b>
          <br/>
          <br/>
          Statistics are created using official government data and python scripts located here:{" "}
          <a href="https://github.com/beauhobba/Database-Tools" style={{ color: colors.txt_3 }}>
            Github
          </a>
        </p>
        <div style={{ color: "#EDF5E1" }}>
          <br></br>
          {/* <p style={{ color: "red" }}>ToDo</p>
          <ol>
            <li>Postcode to Population</li>
            <li>Postcode to Road ID</li>
            <li>
              SA2/SA3/MESH Block/Latitude and Longitude/Postcode to Population
            </li>
            <li>APIS/DATABASE section</li>
          </ol> */}
        </div>
        <Graph/>
      </div>


      <div
        style={{
          paddingTop: 40,
          paddingLeft: 80,
          color: colors.txt,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2 style={{marginBottom: 0}}>About Me</h2>
        <p  style={{marginBottom: -10}}>
          I use data a lot 
          </p>
          <p  style={{marginBottom: -10}}>
          I like animals 
          </p>
          <p  style={{marginBottom: -10}}>
          I am a tron  engineer
          </p>
          <p>
          I have a <a href="https://www.roostgame.com" style={{ color: colors.txt_3 }}>card game </a>
        </p>
        <p>
          More of my{" "}
          <a href="https://www.beauhobba.com" style={{ color: colors.txt_3 }}>work</a>
        </p>
        <Coffee />
      </div>
    </div>
  );
}

export default Home;
