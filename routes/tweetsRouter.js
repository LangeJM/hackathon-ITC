const express = require("express");
const router = express.Router();

const {
  getSentInfoByCountry,
  getCountByCountry,
  getReach,
  getPopularTweets,
} = require("../controllers/tweetCtrlr");

router.get("sent/:ISO", getSentInfoByCountry);

router.get("/popular", getPopularTweets);

router.get("/count/:ISO", getCountByCountry);

router.get("/reach/:ISO", getReach);

module.exports = router;
