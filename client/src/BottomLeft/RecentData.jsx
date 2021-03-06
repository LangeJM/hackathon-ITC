import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";

export default function RecentData(props) {
  const baseUrl = "http://localhost:5000/tweets/";

  const [positiveNum, setPositiveNum] = useState("");
  const [negativeNum, setNegativeSum] = useState("");

  const [posReach, setPosReach] = useState("");
  const [negReach, setNegReach] = useState("");

  const getCount = async (iso) => {
    const response = await fetch(`${baseUrl}count/${iso}`);
    const data = await response.json();
    console.log(data);
    setPositiveNum(data.posCount);
    setNegativeSum(data.negCount);
    return data;
  };

  const getReach = async (iso) => {
    const response = await fetch(`${baseUrl}reach/${iso}`);
    const data = await response.json();
    setPosReach(data.posReachSum);
    setNegReach(data.negReachSum);
    return data;
  };

  useEffect(() => {
    getCount(props.iso);
    getReach(props.iso);
  }, [props]);

  return (
    <Card
      border="light"
      style={{
        width: "auto",
        backgroundColor: "#D9CDB8",
        padding: "0.5rem",
        textAlign: "center",
        height: "215px",
      }}
    >
      <div style={{ backgroundColor: "white" }}>
        <Card.Header>Sentiment Breakdown </Card.Header>
        <Card.Body style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div>
            <Card.Title>Positive 🤓</Card.Title>
            <Card.Text>{positiveNum} tweets</Card.Text>
            <Card.Text>Total reach: {posReach}</Card.Text>
          </div>
          <div>
            <Card.Title>Negative 😟</Card.Title>
            <Card.Text>{negativeNum} tweets</Card.Text>
            <Card.Text>Total reach: {negReach}</Card.Text>
          </div>
        </Card.Body>
      </div>
    </Card>
  );
}
