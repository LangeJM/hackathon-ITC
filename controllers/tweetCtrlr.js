const Tweets = require('../models/tweetsModel')
const tweetsInstance = new Tweets()

const getSentInfoByCountry = async (req, res) => {
  const ISO = req.params.ISO

  const tweetsSentInfo = await tweetsInstance.getTweetsSentInfo(ISO)
  const cleanedTweetsSentInfo = tweetsSentInfo.map((tweet) => {
    tweet.date = tweet.date.toISOString().split('T')[0]
    return tweet
  })
  const sentimentByDate = []
  cleanedTweetsSentInfo.forEach((tweet) => {
    let index = 0
    sentimentByDate.forEach((e, i) => {
      if (e.date == tweet.date) return (index = i)
    })
    if (index) {
      sentimentByDate[index][tweet.sentiments.toLowerCase()]++
    } else {
      sentimentByDate.push({
        date: tweet.date,
        pos: tweet.sentiments === 'Pos' ? 1 : 0,
        neg: tweet.sentiments === 'Neg' ? 1 : 0,
        neut: tweet.sentiments === 'Neut' ? 1 : 0
      })
    }
  })
  res.json(sentimentByDate)
}

const getCountByCountry = async (req, res) => {
  const ISO = req.params.ISO
  const count = await tweetsInstance.getCount(ISO)
  res.json(count)
}

const getReach = async (req, res) => {
  const ISO = req.params.ISO
  const reach = await tweetsInstance.getReach(ISO)
  res.json(reach)
}

module.exports = {
  getSentInfoByCountry,
  getCountByCountry,
  getReach
}
