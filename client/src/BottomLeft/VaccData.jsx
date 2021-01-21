import React from "react";
import Card from "react-bootstrap/Card";

export default function VaccData({ iso }) {
  return (
    <Card
      border="light"
      style={{
        width: "25rem",
        backgroundColor: "#D9CDB8",
        padding: "0.5rem",
        margin: "1rem",
      }}
    >
      <Card.Body>
        {iso && (
          <iframe
            title="vaccineData"
            src={`https://ourworldindata.org/coronavirus-data-explorer?zoomToSelection=true&time=2020-12-20..latest&country=~${iso}~SouthAmerica~NorthAmerica~EuropeanUnion~Asia~Africa&region=World&vaccinationsMetric=true&interval=total&hideControls=true&perCapita=true&smoothing=0&pickerMetric=total_vaccinations&pickerSort=desc`}
            loading="lazy"
            style={{ width: "100%", height: "500px", border: "0px none" }}
          ></iframe>
        )}
      </Card.Body>
    </Card>
  );
}
