const express = require("express");
const router = express.Router();

const { getSentInfoByCountry } = require("../controllers/tweetCtrlr");

router.get("/:ISO", getSentInfoByCountry);

module.exports = router;
