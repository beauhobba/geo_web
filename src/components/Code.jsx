import { Amplify} from "aws-amplify";
import {MeshBlockCentre} from './centres'
import awsconfig from "../aws-exports";

import colors from "./Colours"

// this can be added in index.js as well
Amplify.configure(awsconfig);
// Auth.configure(awsconfig);

function Code() {
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
        Code
        <p style={{ fontSize: 20 }}>
          How to display these maps in different coding languages
        </p>
      </div>
      <div
        style={{
          backgroundColor: colors.box,
          width: "100%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >

      </div>
    </div>
  );
}

export default Code;