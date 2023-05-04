import "./App.css";
import React from "react";
import Breweries from "./components/Breweries";

const App = () => {
  return (
    <div className="breweries-container">
      <div className="column">
      <h2 className="city-header">San Diego Breweries</h2>
      <Breweries city="san_diego" />
      </div>
      <div className="column">
      <h2 className="city-header">Los Angeles Breweries</h2>
      <Breweries city="los_angeles"/>
      </div>
    </div>
  );
};
export default App;
