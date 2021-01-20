import ReactTooltip from "react-tooltip";
import React, { useState } from "react";
import MapChart from "./mapChart";
const MainMap = ({ setCountry }) => {
  const [content, setContent] = useState("");
  return (
    <div>
      <MapChart setTooltipContent={setContent} setCountry={setCountry} />
      <ReactTooltip>{content} Click to view more details</ReactTooltip>
    </div>
  );
};

export default MainMap;
