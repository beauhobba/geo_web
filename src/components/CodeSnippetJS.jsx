import React from 'react';
import colors from "./Colours";


const CodeSnippetJS = () => {
const code = `import React, { useEffect } from 'react';
import Plotly from 'plotly.js-dist';
import Papa from 'papaparse';
import colors from "./Colours"
import g_data from './LGA_centres.txt'

function MapComponent() {
\tuseEffect(() => {
\t\tfetch(g_data)
\t\t.then(response => response.text())
\t\t.then(data => {
\t\t\tconst parsedData = Papa.parse(data,
\t\t\t\t{ header: true }).data;

\t\t\tconst lga = parsedData.filter(row =>
\t\t\t\trow['LATITUDE'] && row['LONGITUDE']);
  
\t\t\tconst lga_centres_latitudes = lga.map(row => 
\t\t\t\tparseFloat(row['LATITUDE'].replace(',', '.')));

\t\t\tconst lga_centres_longitudes = lga.map(row =>
\t\t\t\tparseFloat(row['LONGITUDE'].replace(',', '.')));

\t\t\tconst lga_centre_names = lga.map(row =>
\t\t\t\trow['LGA_NAME22']);

\t\t\t\tconst trace1 = {
\t\t\t\t\ttype: 'scattermapbox',
\t\t\t\t\tlat: lga_centres_latitudes,
\t\t\t\t\tlon: lga_centres_longitudes,
\t\t\t\t\thovertext: lga_centre_names,
\t\t\t\t\tmode: 'markers',
\t\t\t\t\tmarker: {
\t\t\t\t\t\tsize: 5,
\t\t\t\t\t\tcolor: colors.txt_2
\t\t\t\t},
\t\t\t\t\t\ttext: lga_centre_names
\t\t\t\t};
          
\t\t\t\tconst layout = {
\t\t\t\t\ttitle: {
\t\t\t\t\t\ttext: 'LGA Centres Australia',
\t\t\t\t\t\tfont: {
\t\t\t\t\t\t\tsize: 24,
\t\t\t\t\t\t\tfont: "sans-serif" 
\t\t\t\t\t\t}
\t\t\t\t\t},
\t\t\t\t\tmapbox: {
\t\t\t\t\t\tcenter: {
\t\t\t\t\t\t\tlat: -28,
\t\t\t\t\t\t\tlon: 133.4
\t\t\t\t\t\t},
\t\t\t\t\t\tstyle: 'dark', 
\t\t\t\t\t\taccesstoken: "YOUR TOKEN HERE",
\t\t\t\t\t\tzoom:3.4
\t\t\t\t\t},
\t\t\t\t\tautosize: true,
\t\t\t\t\theight: 650,
\t\t\t\t\tpaper_bgcolor: '#000000', 
\t\t\t\t\tplot_bgcolor: '#000000', 
\t\t\t\t\tmargin: {
\t\t\t\t\t\tl: 0,
\t\t\t\t\t\tr: 0,
\t\t\t\t\t\tt: 40,
\t\t\t\t\t\tb: 0
\t\t\t\t\t},
          
\t\t\t\t\tlegend: {
\t\t\t\t\t\tbgcolor: 'rgba(255, 255, 255, 0.7)',
\t\t\t\t\t\tbordercolor: 'rgba(0, 0, 0, 0.2)',
\t\t\t\t\t\tborderwidth: 1,
\t\t\t\t\t\tx: 0,
\t\t\t\t\t\ty: 1,
\t\t\t\t\t\torientation: 'v'
\t\t\t\t\t}
\t\t\t\t};

\t\t\t\tPlotly.newPlot('map', [trace1], layout);
\t\t\t})
\t\t\t.catch(error => {
\t\t\t\tconsole.error('Error:', error);
\t\t\t});
  }, []);

  return <div id="map"></div>;
}

export default MapComponent;
`;

  const lines = code.split('\n');

  return (
    <code style={{ background: colors.box, color: colors.txt_2, padding: '5px', fontFamily: 'Consolas, monospace', textAlign: 'left', paddingLeft: 20, paddingRight: 20}}>
      {lines.map((line, index) => (
        <div key={index}>{line.replace(/\t/g, '\u00A0\u00A0\u00A0\u00A0') || <br />}</div>
      ))}
    </code>
  );
};

export default CodeSnippetJS;
