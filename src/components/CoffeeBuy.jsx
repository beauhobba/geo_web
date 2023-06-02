import React from "react";
import colors from "./Colours";

function Coffee() {
  return (
    <div
      style={{
        backgroundColor: colors.box,
        width: 150,
        height: 100,
        padding: 10,
        color: colors.txt,
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 15,
      }}
    >
      <a
        target="_blank"
        href="https://www.buymeacoffee.com/hobbabeau"
        style={{
          color: colors.txt,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          width: '100%'
        }}
      >
        <img
          src="coffee.png"
          alt="Buy me a coffee"
          style={{height: 55}}
        />
        <p style={{ color: colors.txt }}>Buy me a coffee</p>
      </a>
    </div>
  );
}

export default Coffee;
