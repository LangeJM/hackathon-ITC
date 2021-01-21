import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Card from 'react-bootstrap/Card'

export default function RecentData(props) {

  const baseUrl = 'http://localhost:5000/tweets/'

  const [positiveNum, setPositiveNum] = useState('')
  const [negativeNum, setNegativeSum] = useState('')

  const [posReach, setPosReach] = useState('')
  const [negReach, setNegReach] = useState('')

  const getCount = async () => {
    const response = await fetch(`${baseUrl}count/${props.iso}`);
    const data = await response.json();
    setPositiveNum(data.posCount);
    setNegativeSum(data.negCount);
    return data;
  }

  const getReach = async () => {
    const response = await fetch(`${baseUrl}reach/${props.iso}`);
    const data = await response.json();
    setPosReach(data.posReachSum);
    setNegReach(data.negReachSum);
    return data;
  }

  useEffect(()=>{
    getCount();
    getReach();
  },[props])

  return (
    <Card
      border='light'
      style={{
        width: '30rem',
        backgroundColor: '#D9CDB8',
        padding: '0.5rem',
        margin: '1rem',
      }}
      className="text-center"
    >
      <div style={{ backgroundColor: 'white' }}>
        <Card.Header style={{ fontWeight: 'bold' }}>
          {props.countryName} Sentiment Breakdown{' '}
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
