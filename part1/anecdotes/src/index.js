import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const TextDisplay = (props) => {
  return (
    <div>
      {props.anecdotes[props.selected]}
    </div>
  )  
}

const NextButton = (props) => {
  return (
    <button onClick={props.handleClick}>Next Anecdote</button>
  )  
}

const App = (props) => {
  const [selected, setSelected] = useState(0);

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const handleClick = (idx) => () => {
    setSelected(idx)
  }

  const randomIdx = () => {
    return Math.floor(Math.random()*anecdotes.length)
  }

  return (
    <div>
      <TextDisplay anecdotes={props.anecdotes} selected={selected}/>
      <NextButton handleClick={handleClick(randomIdx)}/>
    </div>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

