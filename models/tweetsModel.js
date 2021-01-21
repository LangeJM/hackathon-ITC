const mongoUtil = require("../utils/dbConnection");

module.exports = class Tweets {
  constructor() {
    this.tweetsCollection = mongoUtil.getDb().collection("model_2");
  }
  getTweetsSentInfo = async (ISO) => {
    try {
      const tweets = await this.tweetsCollection
        .find(
          ISO === "ww"
            ? {}
            : {
                location_iso: ISO,
              }
        )
        .project({ date: 1, sentiments: 1 })
        .toArray();
      return tweets;
    } catch (err) {
      return err.stack;
    }
  };

  getPopularTweets = async () => {
    try {
      const popularTweets = await this.tweetsCollection
        .find({ retweets: { $gt: 0 } })
        .sort({ retweets: -1 })
        .project({ retweets: 1, id: 1 })
        .toArray();
      return popularTweets.slice(0, 5);
    } catch (err) {
      return err.stack;
    }
  };
};
