import React from 'react';
import colors from "./Colours";


const CodeSnippetPython = () => {
const code = `lga = pd.read_csv("./LGA_centres.txt",
  sep='\\t',
  encoding='unicode_escape',
  engine='python')

# Get the mesh centroids 
lga_centres_latitudes = np.array(lga['LATITUDE'])
lga_centres_longitudes = np.array(lga['LONGITUDE'])
lga_centre_names = np.array(lga['LGA_CODE22'])
lga_centre_codes = np.array(lga['LGA_NAME22'])

# Map the regular map 
trace1 =  px.scatter_mapbox(lga, lat='LATITUDE',lon='LONGITUDE', hover_name='LGA_NAME22')

trace1.update_layout({
\t\ttitle: { text: "LGA Centres", font: { size: 24 } },
\t\tmapbox: {
\t\t\tcenter: { lat: -33.8603, lon: 151.0236 },
\t\t\taccesstoken: MAPBOX_ACCESSTOKEN,
\t\t\tzoom: 9.5,
\t\t},
\t\tautosize: true,
\t\theight: 650,
\t\tmargin: { l: 0, r: 0, t: 40, b: 0 },
\t\tlegend: {
\t\t\tbgcolor: 'rgba(255, 255, 255, 0.7)',
\t\t\tbordercolor: 'rgba(0, 0, 0, 0.2)',
\t\t\tborderwidth: 1,
\t\t\tx: 0,
\t\t\ty: 1,
\t\t\torientation: 'v',
\t\t},
});`;

  const lines = code.split('\n');

  return (
    <code style={{ background: colors.box, color: colors.txt_2, padding: '5px', fontFamily: 'Consolas, monospace', textAlign: 'left', paddingLeft: 20, paddingRight: 20}}>
      {lines.map((line, index) => (
        <div key={index}>{line.replace(/\t/g, '\u00A0\u00A0\u00A0\u00A0') || <br />}</div>
      ))}
    </code>
  );
};

export default CodeSnippetPython;
