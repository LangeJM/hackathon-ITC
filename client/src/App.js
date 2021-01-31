import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import RecentData from "./BottomLeft/RecentData";
import VaccData from "./BottomLeft/VaccData";
import TitleBanner from "./TitleBanner/titleBanner";
import "bootstrap/dist/css/bootstrap.min.css";
import MainMap from "./Map/map";
import { WordCloud } from "./WordCloud/WordCloud";
import LineChart from "./LineChart/LineChart";
import PopularTweets from "./BottomLeft/PopularTweets";

function App() {
  const [country, setCountry] = useState("");
  const countryInfo = useRef();
  useEffect(() => {
    if (country) {
      setTimeout(() => {
        countryInfo.current.scrollIntoView({ behavior: "smooth" });
      }, 1000);
    }
  }, [country]);

  return (
    <div className="App">
      <TitleBanner />
      <MainMap setCountry={setCountry} />
      <div
        style={{ display: country ? "block" : "none" }}
        ref={countryInfo}
        className="d-flex flex-column justify-content-center mx-5 mb-5"
        width="clientWidth"
      >
        <h2
          style={{
            backgroundColor: "#D9CDB8",
            display: "inline-block",
            boxShadow: "10px 10px 3px",
          }}
          className="p-3 d-flex "
        >
          {country.country}
        </h2>
        <div className="widget-container d-flex justify-content-center mt-3">
          <div className="left-column mr-3" style={{ width: "25%" }}>
            <PopularTweets country={country} />
          </div>
          <div className="mid-column" style={{ width: "25%" }}>
            <div className="mb-3">
              <VaccData iso={country.iso} />
            </div>
            <RecentData countryName={country.country} iso={country.iso} />
          </div>
          <div className="right-column ml-3" style={{ width: "50%" }}>
            <div className="mb-3">
              <LineChart iso={country.iso} />
            </div>
            <WordCloud />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
