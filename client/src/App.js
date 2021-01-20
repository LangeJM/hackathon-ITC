import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import RecentData from "./BottomLeft/RecentData";
import VaccData from "./BottomLeft/VaccData";
import TitleBanner from "./TitleBanner/titleBanner";
import "bootstrap/dist/css/bootstrap.min.css";
import MainMap from "./Map/map";
import { WordCloud } from './WordCloud/WordCloud'
import LineChart from './LineChart/LineChart'

function App() {
  const [countryIso, setCountryIso] = useState("");
  const countryInfo = useRef();
  useEffect(() => {
    if (countryIso) countryInfo.current.scrollIntoView({ behavior: "smooth" });
  }, [countryIso]);
  return (
    <div className="App">
      <TitleBanner />
      <MainMap setCountryIso={setCountryIso} />
      <div style={{ display: countryIso ? "block" : "none" }} ref={countryInfo} className="d-flex">
        <div>
          <VaccData />
          <RecentData />
        </div>
        <div>
          <WordCloud />
          <LineChart />
          </div>
      </div>
    </div>
  );
}

export default App;
