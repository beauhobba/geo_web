import React, { Text, useEffect  } from "react";

import { Link } from "react-router-dom";
import {Amplify, API, Auth} from 'aws-amplify'

import awsconfig from '../aws-exports';
import { Storage } from 'aws-amplify';

import Coffee from "./coffee";

// configure amplify
// this can be added in index.js as well
Amplify.configure(awsconfig);
Auth.configure(awsconfig);




function RegionCentres() {
  // f.write('MB_CODE21\tLATITUDE\tLONGITUDE\tMB_CAT21
  // \tLOCI_URI21\tAUS_CODE21\tGCC_CODE21\tGCC_NAME21\tAUS_NAME21
  // \tCHG_LBL21\tCHG_FLAG21\tSTE_NAME21\tSTE_CODE21\tAREASQKM21\tSA1_CODE21\tSA2_CODE21\tSA2_NAME21\tSA3_CODE21\tSA3_NAME21\tSA4_CODE21\tSA4_NAME21\n')
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('here')
        let imageKeys = await Storage.list('')
        console.log(imageKeys)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);


  return (
    <div
      style={{
        backgroundColor: "#5CDB95",
        textAlign: "center",
        alignItems: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "start",
        flexDirection: "column",
      }}
    >
      <div style={{ color: "#EDF5E1", fontSize: 50, fontFamily: "sans-serif" }}>
        Region Centres
        <p style={{ fontSize: 20 }}>
          Converts data regions into latitude and longitude
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#8EE4AF",
          width: "100%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <h style={{ fontSize: 30 }}>Mesh Blocks</h>
        </div>
        <div>
          <p>
            Available data columns include:
            <ul>
              <li>MB_CODE21: The mesh block ID</li>
              <li>LATITUDE</li>
              <li>LONGITUDE</li>
              <li>MB_CAT21</li>
              <li>LOCI_URI21</li>
              <li>AUS_CODE21</li>
              <li>GCC_CODE21</li>
              <li>GCC_NAME21</li>
              <li>AUS_NAME21</li>
              <li>CHG_LBL21</li>
              <li>CHG_FLAG21</li>
              <li>STE_NAME21</li>
              <li>STE_CODE21</li>
              <li>AREASQKM21</li>
              <li>SA1_CODE21</li>
              <li>SA2_CODE21</li>
              <li>SA2_NAME21</li>
              <li>SA3_CODE21</li>
              <li>SA3_NAME21</li>
              <li>SA3_NAME21</li>
              <li>SA4_CODE21</li>
              <li>SA4_NAME21</li>
            </ul>
          </p>
          <Link to="/Downloads/mesh_centres.txt" target="_blank" download>.txt</Link>
          <Link to="/Downloads/mesh_centres.xlsx" target="_blank" download>.xlsx</Link>
        </div>
      </div>
    </div>
  );
}

export default RegionCentres;
