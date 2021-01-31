import React from "react";
import Card from "react-bootstrap/Card";

export default function VaccData({ iso, clientWidth }) {
  return (
    <Card
      border="light"
      style={{
        width: "auto",
        backgroundColor: "#D9CDB8",
        padding: "0.5rem",
        textAlign: "center",
        height: "645px",
      }}
    >
      <div style={{ backgroundColor: "white" }}>
        <Card.Header>Vaccines Administered </Card.Header>
        <Card.Body style={{ display: "flex", justifyContent: "space-evenly" }}>
          {iso && (
            <iframe
              title="vaccineData"
              src={`https://ourworldindata.org/coronavirus-data-explorer?zoomToSelection=true&time=2020-12-20..latest&country=~${iso}~SouthAmerica~NorthAmerica~EuropeanUnion~Asia~Africa&region=World&vaccinationsMetric=true&interval=total&hideControls=true&perCapita=true&smoothing=0&pickerMetric=total_vaccinations&pickerSort=desc`}
              loading="lazy"
              style={{
                width: clientWidth * 0.2 - 30,
                height: "535px",
                border: "0px none",
              }}
            ></iframe>
          )}
        </Card.Body>
      </div>
    </Card>
  );
}
