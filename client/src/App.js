import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import RecentData from "./BottomLeft/RecentData";
import VaccData from "./BottomLeft/VaccData";
import TitleBanner from "./TitleBanner/titleBanner";
import "bootstrap/dist/css/bootstrap.min.css";
import MainMap from "./Map/map";
import { WordCloud } from "./WordCloud/WordCloud";
import LineChart from "./LineChart/LineChart";

function App() {
  const [country, setCountry] = useState("");
  const countryInfo = useRef();
  useEffect(() => {
    if (country) countryInfo.current.scrollIntoView({ behavior: "smooth" });
  }, [country]);
  return (
    <div className="App">
      <TitleBanner />
      <MainMap setCountry={setCountry} />
      <div style={{ display: country ? "flex" : "none" }} ref={countryInfo}>
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
