import { Amplify } from "aws-amplify";
import { MeshBlockCentre } from "./centres";
import awsconfig from "../aws-exports";

import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>Code - australiadatabases.com</title>
        <meta
          name="description"
          content="How to use python and javascript to display geographic maps of Australia using plotly and geopandas"
        />
      </Helmet>
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
          width: '70%',
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
          width: '70%',
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
