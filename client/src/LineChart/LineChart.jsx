import React, { useState, useEffect } from "react";
import { Vega } from "react-vega";
import Card from "react-bootstrap/Card";
import axios from "axios";

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
        y: getQuantitativeYObj("neg", "", yAxisValues),
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
        y: getQuantitativeYObj("neut", "", yAxisValues),
      },
    },
    {
      mark: areaMark,
      encoding: {
        x: getDateXObj(rangeLen),
        y: getQuantitativeYObj("pos", "", yAxisValues),
      },
    },
  ],
  config: {
    legend: legendConfig,
  },
});

const getCountrySentimentOverTime = (countryIso) => {
  return axios({
    method: "get",
    url: "http://localhost:5000/tweets/" + countryIso,
  });
};

const data = [
  { neg: 12, pos: 5, neut: 30, date: "2019-10-01" },
  { neg: 32, pos: 6, neut: 5, date: "2019-10-02" },
  { neg: 12, pos: 80, neut: 5, date: "2019-10-03" },
  { neg: 112, pos: 30, neut: 5, date: "2019-10-04" },
  { neg: 12, pos: 5, neut: 50, date: "2019-10-05" },
  { neg: 10, pos: 10, neut: 5, date: "2019-10-06" },
  { neg: 20, pos: 1, neut: 5, date: "2019-10-07" },
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
  const [tweetData, setTweetData] = useState(data);

  const renderLineChart = () => {
    getCountrySentimentOverTime("").then((res) => {
      console.log(res.data);
      return setTweetData(res.data);
    });
  };

  useEffect(() => {
    console.log(`After render`);
    renderLineChart();
  }, []); // This should run on update but passing the state var tweetData keeps re-rendering the component even if the var hasn't changed

  const yAxisValues = Array.from({
    length: yAxisMaxValueFor("pos", "neg", "neut"),
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
              data: { values: tweetData },
            }}
            actions={false}
          />
        </Card.Body>
      </div>
    </Card>
  );
};

export default LineChart;
