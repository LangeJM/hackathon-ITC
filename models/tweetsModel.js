const mongoUtil = require("../utils/dbConnection");

module.exports = class Tweets {
  constructor() {
    this.tweetsCollection = mongoUtil.getDb().collection("model_4");
  }

  getReach = async (ISO) => {
    try {
      const posReachArray = await this.tweetsCollection
        .find(
          ISO === "ww"
            ? { sentiments: "Pos" }
            : {
                country_iso: ISO,
                sentiments: "Pos",
              }
        )
        .project({ user_followers: 1 })
        .toArray();
      let posReachSum = 0;
      posReachArray.forEach((element) => {
        posReachSum += element.user_followers;
      });
      const negReachArray = await this.tweetsCollection
        .find(
          ISO === "ww"
            ? { sentiments: "Neg" }
            : {
                country_iso: ISO,
                sentiments: "Neg",
              }
        )
        .project({ user_followers: 1 })
        .toArray();
      let negReachSum = 0;
      negReachArray.forEach((element) => {
        negReachSum += element.user_followers;
      });
      const reachObject = { posReachSum, negReachSum };
      return reachObject;
    } catch (err) {
      return err.stack;
    }
  };

  getCount = async (ISO) => {
    try {
      const posCount = await this.tweetsCollection
        .find(
          ISO === "ww"
            ? { sentiments: "Pos" }
            : {
                country_iso: ISO,
                sentiments: "Pos",
              }
        )
        .count();
      const negCount = await this.tweetsCollection
        .find(
          ISO === "ww"
            ? { sentiments: "Neg" }
            : {
                country_iso: ISO,
                sentiments: "Neg",
              }
        )
        .count();
      const countObject = { posCount, negCount };
      return countObject;
    } catch (err) {
      return err.stack;
    }
  };

  getTweetsSentInfo = async (ISO) => {
    try {
      const tweets = await this.tweetsCollection
        .find(
          ISO === "ww"
            ? {}
            : {
                country_iso: ISO,
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
      return popularTweets.slice(0, 3);
    } catch (err) {
      return err.stack;
    }
  };
};
