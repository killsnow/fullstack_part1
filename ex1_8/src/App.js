import React, { useState } from 'react'

//define Header component
const Title=(props)=>{
  return(
  <h1>{props.text}</h1>
  )
}

//define Button component
const Button=props=><button onClick={props.handleClick}>{props.text}</button>

//define statistics component
const Statics=props=>{
  const {unicafe,good,neutral,bad}=props
  return(
  <div>
        <h1> {unicafe.statics} </h1>
        <p>{unicafe.buttontext[0]} {good}</p>  
        <p>{unicafe.buttontext[1]} {neutral}</p> 
        <p>{unicafe.buttontext[2]} {bad}</p> 
        <p>{unicafe.count} {good+neutral+bad}</p>
        <p>{unicafe.average} {(bad+neutral)/(good+neutral+bad)}</p>
        <p>{unicafe.positive} {good/(good+neutral+bad)}</p>
  </div>
  )
}

const App=()=>{
  //use useState define state
  const [good,setGood]=useState(0)
  const [neutral,setNeutral]=useState(0)
  const [bad,setBad]=useState(0)
  const unicafe={
    title:"give feedback",
    statics:"statistics",
    buttontext:["good","neutral","bad"],
    count: "all",
    average: "average",
    positive:"positive",
  }
  //define button good handle click
  const handleGoodClick=()=>setGood(good+1)
  //define button neutral handle click
  const handleNeutralClick=()=>setNeutral(neutral+1)
  //define button bad handle click
  const handleBadClick=()=>setBad(bad+1)

  return(
    <div>
      <Title text={unicafe.title} />
      <Button handleClick={handleGoodClick} text={unicafe.buttontext[0]} />
      <Button handleClick={handleNeutralClick} text={unicafe.buttontext[1]} />
      <Button handleClick={handleBadClick} text={unicafe.buttontext[2]} />
      <Statics unicafe={unicafe} good={good} neutral={neutral} bad={bad} />
    </div>
  )
}
export default App