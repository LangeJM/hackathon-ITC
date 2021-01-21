import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import RecentData from "./BottomLeft/RecentData";
import VaccData from "./BottomLeft/VaccData";
import TitleBanner from "./TitleBanner/titleBanner";
import "bootstrap/dist/css/bootstrap.min.css";
import MainMap from "./Map/map";
import { WordCloud } from "./WordCloud/WordCloud";
import LineChart from "./LineChart/LineChart";
import PopularTweets from "./BottomLeft/PopularTweets"

function App() {

  const [country, setCountry] = useState('')
  const countryInfo = useRef()
  useEffect(() => {
    if (country) countryInfo.current.scrollIntoView({ behavior: "smooth" });
  }, [country]);
  return (
    <div className='App'>
      <TitleBanner />
      <MainMap setCountry={setCountry} />
      <div style={{ display: country ? "block" : "none" }} ref={countryInfo}>
        <h2
          style={{
            backgroundColor: "#D9CDB8",
            display: "inline-block",
            boxShadow: "10px 10px 3px",
          }}
          className="p-3"
        >
          {country.country}
        </h2>
        <div className="d-flex">
          <div>
            <VaccData />
            <RecentData />
          </div>
          <div>
            <WordCloud />
            <LineChart />
          </div>
          <div>
            <PopularTweets />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
