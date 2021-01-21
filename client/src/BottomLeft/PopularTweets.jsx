import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import { TwitterTweetEmbed } from 'react-twitter-embed'

export default function PopularTweets() {

  const [tweet1, setTweet1] = useState('1351920219321729024')
  const [tweet2, setTweet2] = useState('1351907570236190720')
  const [tweet3, setTweet3] = useState('1352148443322605568')

  return (
    <Card
      border='light'
      style={{
        width: '90%',
        backgroundColor: '#D9CDB8',
        padding: '0.5rem',
        margin: '1rem auto'
      }}
      className='text-center'
    >
      <Card.Header style={{ fontWeight: 'bold', backgroundColor: 'white' }}>
        Popular Tweets about the Vaccine
      </Card.Header>
      <div 
      style={{justifyContent: 'space-evenly'}}
      className='d-flex'>
        <TwitterTweetEmbed tweetId={tweet1} />
        <TwitterTweetEmbed tweetId={tweet2} />
        <TwitterTweetEmbed tweetId={tweet3} />
      </div>
    </Card>
  )
}
