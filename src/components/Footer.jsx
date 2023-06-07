import React from "react";
import colors from "./Colours"

function Footer() {
  return (
      <footer style={{ backgroundColor: colors.foothead,  margin:0, paddingTop: 10, paddingBottom: 10  }}>
        <div style={{ color: colors.txt, paddingLeft: 20}}>
          <p style={{margin:0}}>Copyright &copy; australiadatabases.com 2023</p>
        </div>
      </footer>
  );
}

export default Footer;
