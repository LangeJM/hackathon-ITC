import React from "react";
// import ReactDOM from "react-dom";
import ReactWordcloud from "react-wordcloud";

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

import words from "./words";

const options = {
  colors: ["#0F801C", "#C2D66D", "#EBBB10", "#753902", "#C73326"],
  enableTooltip: true,
  deterministic: false,
  fontFamily: "impact",
  fontSizes: [5, 60],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 1,
  rotations: 3,
  //   rotationAngles: [0, ],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 1000,
};

export function WordCloud() {
  const cloudWidth = Math.round(document.body.clientWidth * 0.66); // change 0.66 to percentage of content screen width wanted
  return (
    <div style={{ padding: "3rem" }}>
      <h2>World Cloud - Vaccine</h2>
      <div style={{ height: 400, width: cloudWidth }}>
        <ReactWordcloud options={options} words={words} />
      </div>
    </div>
  );
}
