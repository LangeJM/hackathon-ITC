import React from "react";
import ReactWordcloud from "react-wordcloud";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import words from "./words";
import Card from "react-bootstrap/Card";

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
  const cloudWidth = Math.round(document.body.clientWidth * 0.5); // change to percentage of content screen width wanted
  return (
    <Card
      border="light"
      style={{
        width: cloudWidth,
        backgroundColor: "#D9CDB8",
        padding: "0.5rem",
        textAlign: "center",
      }}
    >
      <div style={{ backgroundColor: "white" }}>
        <Card.Header>Word Cloud on Vaccination </Card.Header>
        <Card.Body style={{ display: "flex", justifyContent: "space-evenly" }}>
          <ReactWordcloud options={options} words={words} />
        </Card.Body>
      </div>
    </Card>
  );
}
