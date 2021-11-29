import React from 'react'

//define Header component
const Header=props=><p>{props.course}</p>
//redefine Content component
const Content=props=>
      props.parts.map(part=>{
        return <p key={part.exercises}> {part.name} {part.exercises}</p>
      })
//define Total component
const Total=props=><p>Number of exercises {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>

const App=()=>{
  const course={
  name:'Half Stack application development',
  parts:[
  {
    name:'Fundamentals of React',
    exercises:10,
  },
  {
    name:'Using props to pass data',
    exercises:7,
  },
  {
    name:'State of a component',
    exercises:14,
  }
  ]
} 
  return(
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}  />
      <Total parts={course.parts} />
    </div>
  )
}
export default App