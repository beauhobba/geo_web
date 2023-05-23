import React, { Text } from "react";
import Coffee from "./coffee";
import { API } from "aws-amplify";

function LatitudeLongitude() {
  const [lat, setLat] = React.useState(-42.880554);
  const [lon, setLon] = React.useState(147.324997);
  const [post, setPost] = React.useState(2000);
  const [locality, setLocality] = React.useState("Sydney");
  const [state, setState] = React.useState("NSW");

  const myAPI = "latlonfun";

  function handle_lat(e) {
    e.preventDefault();
    setLat(e.target.value);
  }
  function handle_lon(e) {
    e.preventDefault();
    setLon(e.target.value);
  }

  function handle_post(e) {
    e.preventDefault();
    setPost("Cannot process result yet");
    let data = {};
    API.post(myAPI, "/latlonfun", { body: data })
      .then((response) => {
        console.log(response);
        setPost("Data has been retrieved successfully");
      })
      .catch((error) => {
        console.log(error);
        setPost("There was an error retrieving the data");
      });
  }

  return (
    <div
      style={{
        backgroundColor: "#F0E4CE",
        textAlign: "center",
        alignItems: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "start",
        flexDirection: "column",
      }}
    >
      <div style={{ color: "#396BA8", fontSize: 40 }}>
        <p>Latitude and Longitude Converter Australia</p>
      </div>
      <div
        style={{
          color: "#396BA8",
          justifyContent: "center",
          display: "flex",
          flexDirection: "row",
          width: "100%",
          padding: 5,
        }}
      >
        <form onSubmit={handle_post}>
          <label style={{ paddingRight: 5 }}>
            Latitude:
            <input
              type="text"
              name="name"
              value={lat}
              onChange={handle_lat}
              style={{
                width: "20%",
                backgroundColor: "#E08886",
                borderColor: "#E08886",
                border: "0px",
              }}
            />
          </label>
          <label style={{ paddingRight: 5 }}>
            Longitude:
            <input
              type="text"
              name="name"
              value={lon}
              onChange={handle_lon}
              style={{
                width: "20%",
                backgroundColor: "#E08886",
                borderColor: "#E08886",
                border: "0px",
              }}
            />
          </label>
          <input
            type="submit"
            value="Submit"
            style={{ backgroundColor: "#E08886", borderColor: "#E08886" }}
          />
        </form>
      </div>

      <div
        style={{
          color: "#396BA8",
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ width: "25%", paddingRight: 10 }}>Result: </p>
        <p style={{ width: "25%" }}>{post} </p>
        <p style={{ width: "25%" }}>{locality} </p>
        <p style={{ width: "25%" }}>{state} </p>
      </div>

      <div style={{ color: "#396BA8", padding: 30, paddingTop: 50 }}>
        <label>API Access: Currently Not Available</label>
      </div>
    </div>
  );
}

export default LatitudeLongitude;
