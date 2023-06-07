import { Link } from "react-router-dom";
import { Amplify} from "aws-amplify";

import awsconfig from "../../aws-exports";
import colors from "../Colours"

// this can be added in index.js as well
Amplify.configure(awsconfig);
// Auth.configure(awsconfig);

function SA2Centre() {
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
    <div style={{ color: colors.txt, justifyItems: 'center'}}>
          <h style={{ fontSize: 30 }}>SA2 Centroids</h>
      </div>
      <div style={{ flexDirection: "row", display: "flex",  color: colors.txt_2}}>
              <div>
                  <ul  style={{ listStyle: 'none', padding: 0 }}>
                      <li>LATITUDE: Latitude of mesh block centre </li>
                      <li>LONGITUDE: Longitude of mesh block centre</li>
                      <li>
                          LOCI_URI21: ABS URI (Uniform Resource Identifier) for the
                          location
                      </li>
                      <li>AUS_CODE21: Code or identifier for Australia</li>
                      <li>
                          GCC_CODE21: Code or identifier for a geographical classification
                          system
                      </li>
                      <li>
                          GCC_NAME21: Name of the geographical classification system
                      </li>
                      <li>AUS_NAME21:Australia</li>
                      <li>CHG_LBL21: Change value</li>
                      <li>CHG_FLAG21: Flag or indicator associated with a change</li>
                  </ul>
              </div>
              <div>
              <ul  style={{ listStyle: 'none', padding: 0 }}>
                      <li>STE_NAME21: Name of a state</li>
                      <li>STE_CODE21: Code or identifier for a state</li>
                      <li>AREASQKM21: Area measurement in square kilometers</li>
                      <li>
                          SA2_CODE21: Code or identifier for Statistical Area Level 2
                          (SA2)
                      </li>
                      <li>SA2_NAME21: Name of Statistical Area Level 2 (SA2)</li>
                      <li>
                          SA3_CODE21: Code or identifier for Statistical Area Level 3
                          (SA3)
                      </li>
                      <li>SA3_NAME21: Name of Statistical Area Level 3 (SA3)</li>
                      <li>SA3_NAME21: (Duplicate entry, please verify)</li>
                      <li>
                          SA4_CODE21: Code or identifier for Statistical Area Level 4
                          (SA4)
                      </li>
                      <li>SA4_NAME21: Name of Statistical Area Level 4 (SA4)</li>
                  </ul>
              </div>
          </div><div>
              <Link
                  to="https://geo145327-staging.s3.ap-southeast-2.amazonaws.com/public/SA2_centres.txt"
                  target="_blank"
                  download
                  style={{color: colors.txt_2}}
              >
                  .txt
              </Link>
              &emsp;
              <Link
                  to="https://geo145327-staging.s3.ap-southeast-2.amazonaws.com/public/SA2_centres.xlsx"
                  target="_blank"
                  download
                  style={{color: colors.txt_2}}
              >
                  .xlsx
              </Link>
          </div>
         </div>
  );
}

export default SA2Centre;
