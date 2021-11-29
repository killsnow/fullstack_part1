import React from 'react'

//define Header component
const Header=props=><p>{props.course}</p>
//redefine Content component
const Content=props=>
      props.parts.map(part=>{
        return <p key={part.exercises}> {part.name} {part.exercises}</p>
      })
//define Total component
const Total=props=><p>Number of exercises {props.total}</p>

const App=()=>{
  const course='Half Stack application development'
  const part1={
    name:'Fundamentals of React',
    exercises:10,
  }
  const part2={
    name:'Using props to pass data',
    exercises:7,
  }
  const part3={
    name:'State of a component',
    exercises:14,
  }
  return(
    <div>
      <Header course={course} />
      <Content parts={[part1,part2,part3]}  />
      <Total total={part1.exercises+part2.exercises+part3.exercises} />
    </div>
  )
}
export default App