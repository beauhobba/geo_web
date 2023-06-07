import { Link } from "react-router-dom";
import { Amplify } from "aws-amplify";

import awsconfig from "../../aws-exports";
import colors from "../Colours";

// this can be added in index.js as well
Amplify.configure(awsconfig);
// Auth.configure(awsconfig);

function LGACentre() {
  return (
    <div
      style={{
        backgroundColor: colors.box,
        marginTop: 20,
        width: "50%",
        justifyItems: "center",
        alignContent: "center",
        display: "flex",
        flexDirection: "column",
        borderRadius: 15,
        padding: 10,
        marginBottom: 20,
      }}
    >
      <div style={{ color: colors.txt }}>
        <h style={{ fontSize: 30 }}>LGA Centroids</h>
      </div>
      <div
        style={{ flexDirection: "row", display: "flex", color: colors.txt_2 }}
      >
        <div>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>LATITUDE: Latitude of mesh block centre </li>
            <li>LONGITUDE: Longitude of mesh block centre</li>
            <li>LGA_CODE22: Code of the LGA</li>
            <li>LGA_NAME22: Name of the LGA</li>
          </ul>
        </div>
        <div>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>STE_NAME21: Name of a state or province</li>
            <li>STE_CODE21: Code or identifier for a state or province</li>
            <li>AREASQKM: Area measurement in square kilometers</li>
            <li>SHAPE_Leng: Shape length of LGA</li>
            <li>SHAPE_Area: Shape area of LGA</li>
          </ul>
        </div>
      </div>
      <div>
        <Link
          to="https://geo145327-staging.s3.ap-southeast-2.amazonaws.com/public/LGA_centres.txt"
          target="_blank"
          download
          style={{ color: colors.txt_2 }}
        >
          .txt
        </Link>
        &emsp;
        <Link
          to="https://geo145327-staging.s3.ap-southeast-2.amazonaws.com/public/lga_centres.xlsx"
          target="_blank"
          download
          style={{ color: colors.txt_2 }}
        >
          .xlsx
        </Link>
      </div>
    </div>
  );
}

export default LGACentre;
