import { Amplify } from "aws-amplify";
import { MeshBlockCentre } from "./centres";
import awsconfig from "../aws-exports";

import colors from "./Colours";
import CodeSnippetPython from "./CodeSnippetPython"
import CodeSnippetJS from "./CodeSnippetJS"

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
      <div
        style={{ color: colors.txt, fontSize: 50, fontFamily: "sans-serif" }}
      >
        Code
        <p style={{ fontSize: 20 }}>
          How to display these maps in different coding languages. <br/>
          These examples use the LGA Centroids data
        </p>
      </div>
      <div
        style={{
          backgroundColor: colors.box,
          width: "100%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          width: '50%',
          color: colors.txt,
          margin: 20
        }}
      >
        <p>Python</p>
        <CodeSnippetPython/>
      </div>
      <div
        style={{
          backgroundColor: colors.box,
          width: "100%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          width: '50%',
          color: colors.txt,
          margin: 20
        }}
      >
        <p>Javascript</p>
        <CodeSnippetJS/>
      </div>

    </div>
  );
}

export default Code;
