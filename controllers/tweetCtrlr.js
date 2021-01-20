const Tweets = require("../models/tweetsModel");
const tweetsInstance = new Tweets();

const getAllTweets = async (req, res) => {
  const tweets = await tweetsInstance.getTweets();
  console.log(tweets);

  res.json(tweets);
};

module.exports = {
  getAllTweets,
};
