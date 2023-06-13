import { Amplify } from "aws-amplify";
import {
  Postcode
} from "./latlon";
import awsconfig from "../aws-exports";
import colors from "./Colours";
import React from "react";

import { Helmet } from "react-helmet";
Amplify.configure(awsconfig);

function PostcodeTo() {
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
        <title>Postcode - australiadatabases.com</title>
        <meta
          name="description"
          content="Accurate latitude and longitude to postcodes"
        />
      </Helmet>

      <div
        style={{ color: colors.txt, fontSize: 50, fontFamily: "sans-serif" }}
      >
        Postcodes
        <p style={{ fontSize: 20, margin: 0, marginBottom: 10 }}>
          Converts postcode data into available formats
        </p>
      </div>

      <div
        style={{
          // backgroundColor: colors.box,
          width: "100%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Postcode/>
      </div>
    </div>
  );
}

export default PostcodeTo;
