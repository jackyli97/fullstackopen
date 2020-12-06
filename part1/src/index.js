import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = ({course}) => {
  return(
    <h1>{course}</h1>
  )
}

const Part = ({name, exercise}) => {
  return(
    <p>{name} {exercise}</p>
  )
}

const Content = ({parts, exercises}) => {
  return(
    <>
    <Part name={parts[0]} exercise={exercises[0]}/>
    <Part name={parts[1]} exercise={exercises[1]}/>
    <Part name={parts[2]} exercise={exercises[2]}/>
    </>
  )
}

const Total = ({exercises}) => {
  let tot = 0;
  exercises.forEach(exercise=>{
    tot += exercise;
  })
  return(
    <p>Number of exercises {tot}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content parts={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]}/>
      <Total exercises={[exercises1, exercises2, exercises3]}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))


