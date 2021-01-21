const express = require("express");
const router = express.Router();

const {
  getSentInfoByCountry,
  getPopularTweets,
} = require("../controllers/tweetCtrlr");

router.get("sent/:ISO", getSentInfoByCountry);

router.get("/popular", getPopularTweets);

module.exports = router;
