import ReactTooltip from "react-tooltip";
import React, { useState } from "react";
import MapChart from "./mapChart";
const MainMap = () => {
  const [content, setContent] = useState("");
  return (
    <div>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
};

export default MainMap;
