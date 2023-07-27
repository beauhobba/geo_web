import { Amplify } from "aws-amplify";
import { Link } from "react-router-dom";
import awsconfig from "../aws-exports";
import colors from "./Colours";
import React from "react";

import { Helmet } from "react-helmet";
Amplify.configure(awsconfig);

function Sport() {
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
        <title>Sport- australiadatabases.com</title>
        <meta
          name="description"
          content="NRL statistics for players and matches"
        />
      </Helmet>

      <div
        style={{ color: colors.txt, fontSize: 50, fontFamily: "sans-serif" }}
      >
        Sports
        <p style={{ fontSize: 20, margin: 0, marginBottom: 10 }}>
          All data has been sourced from public pages on the NRL website. 
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
              <Link
                  to="https://geo145327-staging.s3.ap-southeast-2.amazonaws.com/public/nrl_data.json"
                  target="_blank"
                  download
                  style={{color: colors.txt_2}}
              >
                  2023 match data (json)
              </Link>
              <Link
                  to="https://geo145327-staging.s3.ap-southeast-2.amazonaws.com/public/nrl_data_multi_years_2.json"
                  target="_blank"
                  download
                  style={{color: colors.txt_2}}
              >
                  2008-2023 match data (json) [Skips covid football years]
              </Link>
              <Link
                  to="https://geo145327-staging.s3.ap-southeast-2.amazonaws.com/public/player_statistics_2023.json"
                  target="_blank"
                  download
                  style={{color: colors.txt_2}}
              >
                  2023 Player Data (json)
              </Link>


      </div>
    </div>
  );
}

export default Sport;
