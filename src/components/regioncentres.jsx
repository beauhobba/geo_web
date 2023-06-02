import { Amplify} from "aws-amplify";
import {MeshBlockCentre} from './centres'
import awsconfig from "../aws-exports";
import colors from "./Colours"

Amplify.configure(awsconfig);

function RegionCentres() {
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
      <div style={{ color: colors.txt, fontSize: 50, fontFamily: "sans-serif" }}>
        Centroids
        <p style={{ fontSize: 20 }}>
          Converts data regions into latitude and longitude
        </p>
      </div>
      <div
        style={{
          backgroundColor: colors.box,
          width: "80%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
       <MeshBlockCentre/>
      </div>
    </div>
  );
}

export default RegionCentres;
