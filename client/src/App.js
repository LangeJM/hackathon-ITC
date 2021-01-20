import "./App.css";
import React, { useState } from "react";
import RecentData from "./BottomLeft/RecentData";
import VaccData from "./BottomLeft/VaccData";
import TitleBanner from "./TitleBanner/titleBanner";
import "bootstrap/dist/css/bootstrap.min.css";
import MainMap from "./Map/map";

function App() {
  const [countryIso, setCountryIso] = useState("");
  return (
    <div className="App">
      <TitleBanner />
      <MainMap setCountryIso={setCountryIso} />
      <VaccData />
      <RecentData />
    </div>
  );
}

export default App;
