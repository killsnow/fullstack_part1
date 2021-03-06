import React from 'react'

//define Header component
const Header=(props)=>{
  return(
  <p>{props.course}</p>
  )
}

//define Part component
const Part=(props)=>{
  return(
    <p>{props.part} {props.exercises}</p>
  )
}

//redefine Content component
const Content=(props)=>{
  return(
    <div>
    <Part part={props.part[0]} exercises={props.exercises[0]} />
    <Part part={props.part[1]} exercises={props.exercises[1]} />
    <Part part={props.part[2]} exercises={props.exercises[2]} />
    </div>
  )
}
//define Total component
const Total=(props)=>{
  return(
    <p>Number of exercises {props.total}</p>
  )
}

const App=()=>{
  const course='Half Stack application development'
  const part1='Fundamentals of React'
  const exercises1=10
  const part2='Using props to pass data'
  const exercises2=7
  const part3='State of a component'
  const exercises3=14
  return(
    <div>
      <Header course={course} />
      <Content part={[part1,part2,part3]} exercises={[exercises1,exercises2,exercises3]} />
      <Total total={exercises1+exercises2+exercises3} />
    </div>
  )
}
export default App