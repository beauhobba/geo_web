import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  LatitudeLongitude,
  RegionCentres,
  Code,
} from "./components";
import { Amplify, Storage, API } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
API.configure(awsconfig);

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/code" element={<Code />} />
      <Route path="/latitudelongitude" element={<LatitudeLongitude />} />
      <Route path="/regioncentres" element={<RegionCentres />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
