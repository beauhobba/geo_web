import { Amplify } from "aws-amplify";
import {
  MeshBlockCentre,
  SA3Centre,
  SA2Centre,
  SA4Centre,
  SA1Centre,
  LGACentre,
} from "./centres";
import awsconfig from "../aws-exports";
import colors from "./Colours";
import React from "react";

Amplify.configure(awsconfig);

function RegionCentres() {
  const [active, setActive] = React.useState("none");

  const handleClick = (type) => {
    setActive(type);
  };
  const buttonStyle = {
    color: colors.txt_2,
    fontSize: 15,
    fontFamily: "sans-serif",
    backgroundColor: colors.box,
    height: 30,
    margin: 4,
  };

  return (
    <div
      style={{
        backgroundColor: colors.bkg,
        textAlign: "center",
        alignItems: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "start",
        flexDirection: "column",
      }}
    >
      <div
        style={{ color: colors.txt, fontSize: 50, fontFamily: "sans-serif" }}
      >
        Centroids
        <p style={{ fontSize: 20, margin: 0, marginBottom: 10 }}>
          Converts data regions into latitude and longitude
        </p>
      </div>
      <div>
        <button style={buttonStyle} onClick={() => handleClick("lga")}>
          LGA Centroids
        </button>
        <button style={buttonStyle} onClick={() => handleClick("mb")}>
          Mesh Block Centroids
        </button>
        <button style={buttonStyle} onClick={() => handleClick("sa1")}>
          SA1 Centroids
        </button>
        <button style={buttonStyle} onClick={() => handleClick("sa2")}>
          SA2 Centroids
        </button>
        <button style={buttonStyle} onClick={() => handleClick("sa3")}>
          SA3 Centroids
        </button>
        <button style={buttonStyle} onClick={() => handleClick("sa4")}>
          SA4 Centroids
        </button>
      </div>
      <div
        style={{
          // backgroundColor: colors.box,
          width: "80%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {active === "mb" ? (
          <MeshBlockCentre />
        ) : active === "sa1" ? (
          <SA1Centre />
        ) : active === "sa2" ? (
          <SA2Centre />
        ) : active == "sa3" ? (
          <SA3Centre />
        ) : active === "sa4" ? (
          <SA4Centre />
        ) : active === "lga" ? (
          <LGACentre />
        ) : null}
      </div>
    </div>
  );
}

export default RegionCentres;
