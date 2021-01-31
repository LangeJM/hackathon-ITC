import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { TwitterTweetEmbed } from "react-twitter-embed";
import "./PopularTweets.css";

export default function PopularTweets(props) {
  const [popularTweets, setPopularTweets] = useState(null);

  useEffect(() => {
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
        width: "auto",
        height: "876px",
        backgroundColor: "#D9CDB8",
        padding: "0.5rem",
        overflow: "scroll",
      }}
      className="text-center hide-scrollbar"
    >
      <Card.Header style={{ backgroundColor: "#F7F7F7" }}>
        Popular Tweets about the Vaccine{" "}
      </Card.Header>
      {popularTweets &&
        popularTweets.map((tweet) => {
          return <TwitterTweetEmbed key={tweet.id} tweetId={tweet.id} />;
        })}
    </Card>
  );
}
