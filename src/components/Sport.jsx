import { Amplify } from "aws-amplify";
import { Helmet } from "react-helmet";
import awsconfig from "../aws-exports";
import colors from "./Colours";
import React, { useState, useEffect } from "react";
import { CodeBlock, hopscotch } from "react-code-blocks";
import Coffee from "./CoffeeBuy";

Amplify.configure(awsconfig);

const directoryOptions = {
  HOSTPLUS: [2022, 2023, 2024],
  KNOCKON: [2022, 2023, 2024],
  NRLW: [2022, 2023, 2024],
  NRL: Array.from({ length: 2024 - 2001 + 1 }, (_, i) => 2001 + i),
};

const fileOptions = [
  { label: "Match Data", value: "_data_" },
  { label: "Detailed Match Data", value: "_detailed_match_data_" },
  { label: "Player Statistics", value: "_player_statistics_" },
];

function Sport() {
  const [selectedDir, setSelectedDir] = useState("NRL");
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedFile, setSelectedFile] = useState("_data_");

  const [playerStatsData, setPlayerStatsData] = useState(null);
  const [matchList, setMatchList] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fileName = `${selectedDir.toUpperCase()}${selectedFile}${selectedYear}.json`;
  const url = `https://geo145327-staging.s3.ap-southeast-2.amazonaws.com/public/${selectedDir}/${selectedYear}/${fileName}`;

  useEffect(() => {
    const loadPlayerStats = async () => {
      if (selectedFile !== "_player_statistics_") {
        setPlayerStatsData(null);
        setMatchList([]);
        return;
      }

      const statsUrl = `https://geo145327-staging.s3.ap-southeast-2.amazonaws.com/public/${selectedDir}/${selectedYear}/${selectedDir.toUpperCase()}_player_statistics_${selectedYear}.json`;

      try {
        setIsLoading(true);
        const response = await fetch(statsUrl);
        const data = await response.json();
        setPlayerStatsData(data);

        const matches = [];
        data?.PlayerStats?.forEach((yearData) => {
          const year = Object.keys(yearData)[0];
          yearData[year]?.forEach((roundData) => {
            Object.keys(roundData)?.forEach((roundNum) => {
              roundData[roundNum]?.forEach((match) => {
                Object.keys(match)?.forEach((matchKey) => {
                  matches.push(matchKey);
                });
              });
            });
          });
        });

        setMatchList(matches);
      } catch (err) {
        console.error("Failed to load player stats:", err);
        setMatchList([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadPlayerStats();
  }, [selectedDir, selectedYear, selectedFile]);

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
        <title>Sport - australiadatabases.com</title>
        <meta
          name="description"
          content="NRL statistics for players and matches. Machine learning model for predicting game scores"
        />
      </Helmet>

      <div style={{ color: colors.txt, fontSize: 50, fontFamily: "sans-serif" }}>
        Sports
        <p style={{ fontSize: 20, margin: 0, marginBottom: 10 }}>
          All data has been sourced from public pages on the NRL website.
        </p>
      </div>

      <div
        style={{
          width: "100%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Dropdowns */}
        <div style={{ display: "flex", flexDirection: "row", gap: "10px", margin: "10px" }}>
          <select
            value={selectedDir}
            onChange={(e) => {
              const dir = e.target.value;
              setSelectedDir(dir);
              setSelectedYear(directoryOptions[dir][0]);
            }}
          >
            {Object.keys(directoryOptions).map((dir) => (
              <option key={dir} value={dir}>
                {dir}
              </option>
            ))}
          </select>

          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
          >
            {directoryOptions[selectedDir].map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          <select
            value={selectedFile}
            onChange={(e) => setSelectedFile(e.target.value)}
          >
            {fileOptions.map((file) => (
              <option key={file.value} value={file.value}>
                {file.label}
              </option>
            ))}
          </select>
        </div>

        <a
          href={url}
          target="_blank"
          download
          style={{ color: colors.txt_2, fontSize: 16, marginBottom: 20 }}
        >
          Download Selected File
        </a>

        {/* GitHub Link */}
        <div
          style={{
            color: colors.txt_3,
            fontSize: 14,
            fontFamily: "sans-serif",
            paddingTop: 10,
          }}
        >
          <p>
            Download the GitHub here: <br />
            <i>
              <a
                href="https://github.com/beauhobba/NRL-Data"
                style={{ color: colors.txt_3 }}
              >
                Nrl Data
              </a>
            </i>
            <br />
            It features NRL data scraping solutions and a machine learning model predicting outcomes.
          </p>
        </div>
        <div style={{ margin: "20px" }}>
        <Coffee />
      </div>
        {/* Player Stats Viewer */}
        {selectedFile === "_player_statistics_" && (
          <div style={{ width: "100%", padding: 20 }}>
            <h3 style={{ color: colors.txt }}>NRL Player Statistics Viewer</h3>

            {isLoading ? (
              <p style={{ color: colors.txt, fontSize: 18 }}>Loading player statistics...</p>
            ) : (
              <>
                <label htmlFor="matchDropdown" style={{ color: colors.txt }}>
                  Select a Match:
                </label>
                <select
                  id="matchDropdown"
                  value={selectedMatch}
                  onChange={(e) => setSelectedMatch(e.target.value)}
                  style={{ marginLeft: 10 }}
                >
                  <option value="">-- Select --</option>
                  {matchList.map((match) => (
                    <option key={match} value={match}>
                      {match}
                    </option>
                  ))}
                </select>

                <div style={{ overflowX: "auto", maxHeight: 600, marginTop: 20 }}>
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      backgroundColor: "#fff",
                      color: "#000",
                    }}
                  >
                    <thead>
                      <tr>
                        {[
                          "Name", "Number", "Position", "Mins Played", "Points", "Tries",
                          "Conversions", "Conversion Attempts", "Penalty Goals", "Goal Conversion Rate",
                          "1 Point Field Goals", "2 Point Field Goals", "Total Points", "All Runs",
                          "All Run Metres", "Kick Return Metres", "Post Contact Metres", "Line Breaks",
                          "Line Break Assists", "Try Assists", "Line Engaged Runs", "Tackle Breaks",
                          "Hit Ups", "Play The Ball", "Average Play The Ball Speed", "Dummy Half Runs",
                          "Dummy Half Run Metres", "One on One Steal", "Offloads", "Dummy Passes",
                          "Passes", "Receipts", "Passes To Run Ratio", "Tackle Efficiency",
                          "Tackles Made", "Missed Tackles", "Ineffective Tackles", "Intercepts",
                          "Kicks Defused", "Kicks", "Kicking Metres", "Forced Drop Outs", "Bomb Kicks",
                          "Grubbers", "40/20", "20/40", "Cross Field Kicks", "Kicked Dead", "Errors",
                          "Handling Errors", "One on One Lost", "Penalties", "Ruck Infringements",
                          "Inside 10 Metres", "On Report", "Sin Bins", "Send Offs", "Stint One", "Stint Two"
                        ].map((header, i) => (
                          <th
                            key={i}
                            style={{
                              border: "1px solid #000",
                              padding: 8,
                              backgroundColor: "#f2f2f2",
                            }}
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {selectedMatch ? (
                        playerStatsData?.PlayerStats?.map((yearData) => {
                          const year = Object.keys(yearData)[0];
                          return yearData[year]?.flatMap((roundData) =>
                            Object.values(roundData).flatMap((matches) =>
                              matches.flatMap((match) =>
                                Object.entries(match).flatMap(([matchKey, players]) =>
                                  matchKey === selectedMatch
                                    ? players.map((player, idx) => (
                                        <tr key={idx}>
                                          {Object.values(player).map((stat, i) => (
                                            <td
                                              key={i}
                                              style={{ border: "1px solid #000", padding: 6 }}
                                            >
                                              {stat}
                                            </td>
                                          ))}
                                        </tr>
                                      ))
                                    : []
                                )
                              )
                            )
                          );
                        })
                      ) : (
                        <tr>
                          <td colSpan={58} style={{ textAlign: "center", padding: 20 }}>
                            Select a match to view player statistics.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        )}
      </div>


    </div>
  );
}

export default Sport;
