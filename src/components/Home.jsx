import React, { Text } from "react";
import Coffee from "./CoffeeBuy";
import colors from "./Colours"
import Graph from "./Graph"
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Home - australiadatabases.com</title>
        <meta
          name="description"
          content="Provides easy to access and free Australian data on geographic data such as latitude longitude, postcodes, SA2, SA3, mesh blocks and roads"
        />
      </Helmet>
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
          Last Updated: <b>30/7/2023</b>
          <br/>
          <br/>
          Statistics are created using official data (from the source), with python scripts being located here:{" "}
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
