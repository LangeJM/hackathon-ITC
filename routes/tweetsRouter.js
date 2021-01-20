const express = require("express");
const router = express.Router();

const { getAllTweets } = require("../controllers/tweetCtrlr");

router.get("", getAllTweets);

module.exports = router;
