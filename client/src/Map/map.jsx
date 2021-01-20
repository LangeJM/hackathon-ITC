import ReactTooltip from "react-tooltip";
import React, { useState } from "react";
import MapChart from "./mapChart";
const MainMap = ({ setCountryIso }) => {
  const [content, setContent] = useState("");
  return (
    <div>
      <MapChart setTooltipContent={setContent} setCountryIso={setCountryIso} />
      <ReactTooltip>{content} Click to view more details</ReactTooltip>
    </div>
  );
};

export default MainMap;
