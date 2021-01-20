const mongoUtil = require("../utils/dbConnection");

module.exports = class Tweets {
  constructor() {
    this.tweetsCollection = mongoUtil.getDb().collection("hackton");
  }
  getTweets = async () => {
    try {
      const tweetsCursor = await this.tweetsCollection.find();
      const tweets = await tweetsCursor.toArray();
      return tweets;
    } catch (err) {
      return err.stack;
    }
  };
};
