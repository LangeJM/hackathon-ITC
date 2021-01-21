import React from "react";
import { Vega } from "react-vega";
import Card from "react-bootstrap/Card";

// chart config
const posColor = "green";
const negColor = "red";
const neutralColor = "#9e9e9e";
const legendColor = "black";

const areaMark = {
  type: "line",
  color: posColor,
  interpolate: "monotone",
};

const getDateXObj = (rangeLen) => ({
  field: "date",
  type: `${rangeLen > 30 ? "temporal" : "ordinal"}`,
  timeUnit: "yearmonthdate",
  axis: {
    title: "",
    labelAngle: -45,
  },
});

const getQuantitativeYObj = (field, title, values) => ({
  field,
  type: "quantitative",
  axis: {
    title,
    format: "d",
    values,
    tickCount: 10,
  },
});

const legendConfig = {
  title: null,
  offset: -106,
  padutraling: 5,
  padding: 5,
  strokeColor: legendColor,
  strokeWidth: 2,
  symbolType: "stroke",
  symbolOffset: 0,
  symbolStrokeWidth: 10,
  labelOffset: 0,
  cornerRadius: 10,
  symbolSize: 100,
  clipHeight: 20,
};

const getSpec = (yAxisValues = [], rangeLen = 0) => ({
  $schema: "https://vega.github.io/schema/vega-lite/v4.json",
  // title: "Sentiments towards vaccination over time",
  layer: [
    {
      mark: {
        ...areaMark,
        color: negColor,
      },
      encoding: {
        x: getDateXObj(rangeLen),
        y: getQuantitativeYObj("negTweets", "", yAxisValues),
        // Below config provides a legend, however, one layer disappears once it is toggled
        // stroke: {
        //   field: "symbol",
        //   type: "ordinal",
        //   scale: {
        //     domain: ["Positive Tweets", "Negative Tweets", "Neutral Tweets"],
        //     range: [posColor, negColor, neutralColor],
        //   },
        // },
      },
    },
    {
      mark: {
        ...areaMark,
        color: neutralColor,
      },
      encoding: {
        x: getDateXObj(rangeLen),
        y: getQuantitativeYObj("neutralTweets", "", yAxisValues),
      },
    },
    {
      mark: areaMark,
      encoding: {
        x: getDateXObj(rangeLen),
        y: getQuantitativeYObj("posTweets", "", yAxisValues),
      },
    },
  ],
  config: {
    legend: legendConfig,
  },
});

const data = [
  { negTweets: 12, posTweets: 5, neutralTweets: 30, date: "2019-10-01" },
  { negTweets: 32, posTweets: 6, neutralTweets: 5, date: "2019-10-02" },
  { negTweets: 12, posTweets: 80, neutralTweets: 5, date: "2019-10-03" },
  { negTweets: 112, posTweets: 30, neutralTweets: 5, date: "2019-10-04" },
  { negTweets: 12, posTweets: 5, neutralTweets: 50, date: "2019-10-05" },
  { negTweets: 10, posTweets: 10, neutralTweets: 5, date: "2019-10-06" },
  { negTweets: 20, posTweets: 1, neutralTweets: 5, date: "2019-10-07" },
];

const LineChart = () => {
  // get max value from data arary
  const yAxisMaxValueFor = (...keys) => {
    const maxList = keys.map(
      (key) =>
        data.reduce(
          // find the item containing the max value
          (acc, cur) => (cur[key] > acc[key] ? cur : acc)
        )[key]
    );
    return Math.max(...maxList);
  };

  const yAxisValues = Array.from({
    length: yAxisMaxValueFor("posTweets", "negTweets", "neutralTweets"),
  }).map((v, i) => i + 1);

  const spec = getSpec(yAxisValues, data.length);
  const cloudWidth = Math.round(document.body.clientWidth * 0.5); // change to percentage of content screen width wanted

  return (
    <Card
      border="light"
      style={{
        width: cloudWidth,
        backgroundColor: "#D9CDB8",
        padding: "0.5rem",
        margin: "1rem",
        textAlign: "center",
      }}
    >
      <div style={{ backgroundColor: "white" }}>
        <Card.Header>Sentiment on vaccination over time </Card.Header>
        <Card.Body style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Vega
            spec={{
              ...spec,
              autosize: "fit",
              resize: true,
              contains: "padding",
              width: cloudWidth - 30,
              height: 300,
              data: { values: data },
            }}
            actions={false}
          />
        </Card.Body>
      </div>
    </Card>
  );
};

export default LineChart;