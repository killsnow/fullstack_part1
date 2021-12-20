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
const Statics=props=><p>{props.text} {props.count}</p>


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
      <Title text={unicafe.statics} />
      <Statics text={unicafe.buttontext[0]} count={good} />
      <Statics text={unicafe.buttontext[1]} count={neutral} />
      <Statics text={unicafe.buttontext[2]} count={bad} />
      <Statics text={unicafe.count} count={good+neutral+bad} />
      <Statics text={unicafe.average} count={(bad+neutral)/(good+neutral+bad)} />
      <Statics text={unicafe.positive} count={good/(good+neutral+bad)} />
    </div>
  )
}
export default App