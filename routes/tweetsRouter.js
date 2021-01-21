const express = require('express')
const router = express.Router()

const {
  getSentInfoByCountry,
  getCountByCountry,
  getReach
} = require('../controllers/tweetCtrlr')

router.get('/:ISO', getSentInfoByCountry)

router.get('/count/:ISO', getCountByCountry)

router.get('/reach/:ISO', getReach)

module.exports = router
