import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import RecentData from "./BottomLeft/RecentData";
import VaccData from "./BottomLeft/VaccData";
import TitleBanner from "./TitleBanner/titleBanner";
import "bootstrap/dist/css/bootstrap.min.css";
import MainMap from "./Map/map";
import { WordCloud } from "./WordCloud/WordCloud";
import LineChart from "./LineChart/LineChart";
import PopularTweets from './BottomLeft/PopularTweets';

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
      <div
        style={{ display: country ? 'block' : 'none' }}
        ref={countryInfo}
        className='d-block'
      >
        <div 
        style={{ justifyContent: 'space-evenly' }}
        className='d-flex'>
          <div>
            <VaccData iso={country.iso}/>
            <RecentData countryName={country.country} iso={country.iso}/>
          </div>
          <div>
            <LineChart />
            <WordCloud />
          </div>
        </div>
        <div>
          <PopularTweets />
        </div>
      </div>
    </div>
  )
}

export default App
