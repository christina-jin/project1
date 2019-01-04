import React from 'react'
import calcResult from './calcResult'

const Result = (props) => {
  const { answers } = props
  const drink = calcResult(answers)

  const description = {
    Beer: 'You enjoy the casual things in life!',
    Wine: 'You enjoy the meaningful things in life!',
    Spirits: 'You like life at it\'s rawest form!',
    Cocktails: 'You live in the moment, taking every opportunity for a new adventure!',
    Water: 'You love life!'
  }
  
  return (
    <div id="result">
      <h1>{drink}</h1>
      <h4>{description[drink]}</h4>
      <img src={`/${drink}.png`} />
    </div>
  )
}

export default Result;