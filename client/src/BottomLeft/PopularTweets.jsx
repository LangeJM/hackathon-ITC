import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { TwitterTweetEmbed } from "react-twitter-embed";

export default function PopularTweets(props) {
  const [popularTweets, setPopularTweets] = useState(null);

  useEffect(() => {
    console.log(props.country.iso);
    fetch("http://localhost:5000/tweets/popular/" + props.country.iso)
      .then((response) => response.json())
      .then((data) => {
        setPopularTweets(data);
      });
  }, [props]);
  return (
    <Card
      border="light"
      style={{
        width: "fit-content",
        height: "900px",
        backgroundColor: "#D9CDB8",
        padding: "0.5rem",
        margin: "1rem auto",
      }}
      className="text-center"
    >
      <Card.Header style={{ fontWeight: "bold", backgroundColor: "white" }}>
        Popular Tweets about the Vaccine
      </Card.Header>
      <div
        style={{ justifyContent: "space-evenly", overflow: "scroll" }}
        className="d-flex-column"
      >
        {popularTweets &&
          popularTweets.map((tweet) => {
            return <TwitterTweetEmbed key={tweet.id} tweetId={tweet.id} />;
          })}
      </div>
    </Card>
  );
}
