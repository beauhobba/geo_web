import { Amplify} from "aws-amplify";
import {MeshBlockCentre} from './centres'
import awsconfig from "../aws-exports";


// this can be added in index.js as well
Amplify.configure(awsconfig);
// Auth.configure(awsconfig);

function RegionCentres() {
  return (
    <div
      style={{
        backgroundColor: "#5CDB95",
        textAlign: "center",
        alignItems: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "start",
        flexDirection: "column",
      }}
    >
      <div style={{ color: "#EDF5E1", fontSize: 50, fontFamily: "sans-serif" }}>
        Centroids
        <p style={{ fontSize: 20 }}>
          Converts data regions into latitude and longitude
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#8EE4AF",
          width: "100%",
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
