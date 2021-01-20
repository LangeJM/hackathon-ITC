import React from 'react'
import { useState } from 'react'
import Card from 'react-bootstrap/Card'

export default function RecentData() {
  
  const [country, setCountry] = useState('Israel')
  const [positiveNum, setPositiveSum] = useState(500000)
  const [negativeNum, setNegativeSum] = useState(200000)
  const [posReach, setPosReach] = useState(1000000)
  const [negReach, setNegReach] = useState(500000)

  return (
    <Card
      border='light'
      style={{
        width: '30rem',
        backgroundColor: '#D9CDB8',
        padding: '0.5rem',
        margin: '1rem',
        textAlign: 'center'
      }}
    >
      <div style={{ backgroundColor: 'white' }}>
        <Card.Header style={{ fontWeight: 'bold' }}>
          {country} Sentiment Breakdown{' '}
        </Card.Header>
        <Card.Body style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <div>
            <Card.Title>Positive 🤓</Card.Title>
            <Card.Text>{positiveNum} tweets</Card.Text>
            <Card.Text>Total reach: {posReach}</Card.Text>
          </div>
          <div>
            <Card.Title>Negative 😟</Card.Title>
            <Card.Text>{negativeNum} tweets</Card.Text>
            <Card.Text>Total reach: {negReach}</Card.Text>
          </div>
        </Card.Body>
      </div>
    </Card>
  )
}
