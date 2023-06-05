import React, { useEffect, useState } from "react";
import Plotly from "plotly.js-dist";
import Papa from "papaparse";
import colors from "./Colours";
import g_data from "./LGA_centres.txt";

import { API } from "aws-amplify";

const myAPI = "mapboxfunction";

function MapComponent() {
  const [mapboxapi, setMapboxApi] = useState(null);

  useEffect(() => {
    API.post(myAPI, "/items", { body: {} })
      .then((response) => {
        setMapboxApi(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (mapboxapi) {
      fetch(g_data)
        .then((response) => response.text())
        .then((data) => {
          const parsedData = Papa.parse(data, { header: true }).data;
          const lga = parsedData.filter(
            (row) => row["LATITUDE"] && row["LONGITUDE"]
          );

          const lga_centres_latitudes = lga.map((row) =>
            parseFloat(row["LATITUDE"].replace(",", "."))
          );
          const lga_centres_longitudes = lga.map((row) =>
            parseFloat(row["LONGITUDE"].replace(",", "."))
          );
          const lga_centre_names = lga.map((row) => row["LGA_NAME22"]);

          const trace1 = {
            type: "scattermapbox",
            lat: lga_centres_latitudes,
            lon: lga_centres_longitudes,
            hovertext: lga_centre_names,
            mode: "markers",
            marker: {
              size: 5,
              color: colors.txt_2,
            },
            text: lga_centre_names,
          };

          const layout = {
            title: {
              text: "LGA Centres Australia",
              font: {
                size: 24,
                font: "sans-serif",
              },
            },
            mapbox: {
              center: {
                lat: -28,
                lon: 133.4,
              },
              style: "dark",
              accesstoken: mapboxapi,
              zoom: 3.4,
            },
            autosize: true,
            height: 650,
            paper_bgcolor: "#000000", // Set the background color of the entire chart to black
            plot_bgcolor: "#000000", // Set the background color of the plot area to black
            margin: {
              l: 0,
              r: 0,
              t: 40,
              b: 0,
            },
            legend: {
              bgcolor: "rgba(255, 255, 255, 0.7)",
              bordercolor: "rgba(0, 0, 0, 0.2)",
              borderwidth: 1,
              x: 0,
              y: 1,
              orientation: "v",
            },
          };

          Plotly.newPlot("map", [trace1], layout);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [mapboxapi]);

  return <div id="map"></div>;
}

export default MapComponent;
