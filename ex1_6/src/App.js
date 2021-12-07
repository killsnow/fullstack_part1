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
  const [countvalue,setCountvalue]=useState({
    good: 0,
    neutral: 0,
    bad: 0
  })
  const unicafe={
    title:"give feedback",
    statics:"statistics",
    buttontext:["good","neutral","bad"]
  }
  //define button good handle click
  const handleGoodClick=()=>{
    const newClicks={
      ...countvalue,
      good: countvalue.good+1,
    }
    setCountvalue(newClicks)
  }
  //define button neutral handle click
  const handleNeutralClick=()=>{
    const newClicks={
      ...countvalue,
      neutral: countvalue.neutral+1,
    }
    setCountvalue(newClicks)
  }
  //define button bad handle click
  const handleBadClick=()=>{
    const newClicks={
      ...countvalue,
      bad: countvalue.bad+1,
    }
    setCountvalue(newClicks)
  }

  return(
    <div>
      <Title text={unicafe.title} />
      <Button handleClick={handleGoodClick} text={unicafe.buttontext[0]} />
      <Button handleClick={handleNeutralClick} text={unicafe.buttontext[1]} />
      <Button handleClick={handleBadClick} text={unicafe.buttontext[2]} />
      <Title text={unicafe.statics} />
      <Statics text={unicafe.buttontext[0]} count={countvalue.good} />
      <Statics text={unicafe.buttontext[1]} count={countvalue.neutral} />
      <Statics text={unicafe.buttontext[2]} count={countvalue.bad} />
    </div>
  )
}
export default App