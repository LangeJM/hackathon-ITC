import './App.css'
import React, { useEffect, useRef, useState } from 'react'
import RecentData from './BottomLeft/RecentData'
import VaccData from './BottomLeft/VaccData'
import TitleBanner from './TitleBanner/titleBanner'
import 'bootstrap/dist/css/bootstrap.min.css'
import PopularTweets from './BottomLeft/PopularTweets'
import MainMap from './Map/map'

function App() {
  const [countryIso, setCountryIso] = useState('')
  const countryInfo = useRef()
  useEffect(() => {
    if (countryIso) countryInfo.current.scrollIntoView({ behavior: 'smooth' })
  }, [countryIso])

  return (
    <div className='App'>
      <TitleBanner />
      <MainMap setCountryIso={setCountryIso} />
      <div style={{ display: countryIso ? 'block' : 'none' }} ref={countryInfo}>
        <RecentData countryIso={countryIso} />
        <VaccData countryIso={countryIso} />
        <PopularTweets />
      </div>
    </div>
  )
}

export default App
