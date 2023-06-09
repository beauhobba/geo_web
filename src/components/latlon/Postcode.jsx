import { Link } from "react-router-dom";
import { Amplify } from "aws-amplify";

import awsconfig from "../../aws-exports";
import colors from "../Colours";

// this can be added in index.js as well
Amplify.configure(awsconfig);
// Auth.configure(awsconfig);

function Postcode() {
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
        <h style={{ fontSize: 30 }}>Postcode</h>
      </div>
      <div
        style={{ flexDirection: "row", display: "flex", color: colors.txt_2 }}
      >
        <div>
          <ul style={{ listStyle: "none", padding: 0 }}>
          <li>POA_CODE21: Post code</li>
          <li>POA_NAME21: Post code name (same as POA_CODE21)</li>
          <li>AUS_CODE21: Australia or Not</li>
          <li>AUS_NAME21: Australia or Not</li>

          <li>LATITUDE: Latitude of mesh block centre </li>
          <li>LONGITUDE: Longitude of mesh block centre</li>
          <li>LGA_CODE22: Code of the LGA</li>
          <li>LGA_NAME22: Name of the LGA</li>
          <li>IRE_CODE21: Indigenous Region Codes</li>
          <li>IRE_NAME21: Indigenous Region Code Names</li>
          <li>SED_CODE22: State Electoral Division Codes</li>
          <li>SED_NAME22: State Electoral Division Code Names</li>
          <li>CED_CODE21: Commonwealth Electoral Division Codes</li>
          <li>CED_NAME21: Commonwealth Electoral Division Code Names</li>
          <li>STE_CODE21: Remoteness Code</li>







        </ul>
      </div>
      <div>
        <ul style={{ listStyle: "none", padding: 0 }}>
        <li>IAR_CODE21: Indigenous Area Codes</li>
        <li>IAR_NAME21: Indigenous Area Code Names</li>
        <li>ILO_CODE21: Indigenous Location Codes</li>
          <li>ILO_NAME21: Indigenous Location Names</li>
        <li>SA3_CODE21: Statistical Area 3 Codes</li>
          <li>SA3_NAME21: Statistical Area 3 Code Names</li>
          <li>SA4_CODE21: Statistical Area 4 Codes</li>
          <li>SA4_NAME21: Statistical Area 4 Code Names</li>
          <li>STE_NAME21: Name of state</li>
          <li>STE_CODE21: Code or identifier for the state</li>
          <li>AREASQKM: Area measurement in square kilometers</li>
          <li>SHAPE_Leng: Shape length of LGA</li>
          <li>SHAPE_Area: Shape area of LGA</li>
        </ul>
      </div>
    </div><div>
        <Link
          to="https://geo145327-staging.s3.ap-southeast-2.amazonaws.com/public/post_codes_lat_lon_full.txt"
          target="_blank"
          download
          style={{ color: colors.txt_2 }}
        >
          .txt
        </Link>
        &emsp;
        <Link
          to="https://geo145327-staging.s3.ap-southeast-2.amazonaws.com/public/post_codes_lat_lon_full.csv"
          target="_blank"
          download
          style={{ color: colors.txt_2 }}
        >
          .csv
        </Link>
      </div>
    </div>
  );
}

export default Postcode;
