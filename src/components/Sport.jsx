import { Amplify } from "aws-amplify";
import { Link } from "react-router-dom";
import awsconfig from "../aws-exports";
import colors from "./Colours";
import React from "react";
import { CodeBlock, hopscotch } from "react-code-blocks";
import Coffee from "./CoffeeBuy";


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
          content="NRL statistics for players and matches. Machine learning model for predicting game scores"
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
          style={{ color: colors.txt_2 }}
        >
          2023 match data (json)
        </Link>
        <Link
          to="https://geo145327-staging.s3.ap-southeast-2.amazonaws.com/public/nrl_data_multi_years_2.json"
          target="_blank"
          download
          style={{ color: colors.txt_2 }}
        >
          2008-2023 match data (json) [Skips covid football years]
        </Link>
        <Link
          to="https://geo145327-staging.s3.ap-southeast-2.amazonaws.com/public/player_statistics_2023.json"
          target="_blank"
          download
          style={{ color: colors.txt_2 }}
        >
          2023 Player Data (json)
        </Link>
        <br/> 

        <Link
          to="https://geo145327-staging.s3.ap-southeast-2.amazonaws.com/public/player_statistics_2024.json"
          target="_blank"
          download
          style={{ color: colors.txt_2 }}
        >
          2024 Player Data (json)
        </Link>
        <Link
          to="https://geo145327-staging.s3.ap-southeast-2.amazonaws.com/public/nrl_data_2024.json"
          target="_blank"
          download
          style={{ color: colors.txt_2 }}
        >
          2024 Match Data (json)
        </Link>


        <div
          style={{
            color: colors.txt_3,
            fontSize: 14,
            fontFamily: "sans-serif",
            paddingTop: 10,
          }}
        >
          <p>
            Download the github here: <br />
            <i>
              <a
                href="https://github.com/beauhobba/NRL-Data"
                style={{ color: colors.txt_3 }}
              >
                Nrl Data
              </a>
            </i>
            <br/>
            it features NRL data scraping solutions and machine learning model predicting 
          </p>
        </div>

        <div
          style={{
            color: colors.txt,
            fontSize: 50,
            margingTop: 20,
            fontFamily: "sans-serif",
          }}
        >
          Predictions
          <p style={{ fontSize: 15, margin: 0, marginBottom: 10 }}>
            NRL Results vs Predictions will be posted here
          </p>
        </div>

        <div
          style={{
            color: colors.txt,
            fontSize: 50,
            margingTop: 20,
            fontFamily: "sans-serif",
          }}
        >
          Coding Tutorial
        </div>
        <CodeBlock
          text='console.log("Tutorial Coming Soon!");'
          language="python"
          theme={hopscotch}
          showLineNumbers={false}
          codeBlock
        />


      </div>
      
      <div style={{margin: "20px"}}>
      <Coffee />
      </div>


    </div>
  );
}

export default Sport;
