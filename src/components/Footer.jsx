import React from "react";
import colors from "./Colours"

function Footer() {
  return (
      <footer style={{ backgroundColor: colors.foothead,  margin:0, paddingTop: 0, paddingBottom: 0  }}>
        <div style={{ color: colors.txt, paddingLeft: 20}}>
          <p style={{margin:0}}>Copyright &copy; beauhobba.com 2022</p>
        </div>
      </footer>
  );
}

export default Footer;
