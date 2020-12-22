import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const randomIdx = () => {
  return Math.floor(Math.random() * anecdotes.length)
}

const Header = ({title}) => {
  return (
    <h1>{title}</h1>
  )
}

const TextDisplay = (props) => {
  return (
    <>
      <div>{anecdotes[props.selected]}</div>
      <div>
        <VotesDisplay voteCount={props.votes[props.selected]}/>
      </div>
    </>
  )  
}

const NextButton = ({setSelected}) => {
  return (
    <button onClick={() => setSelected(randomIdx)}>Next Anecdote</button>
  )  
}

const VotesDisplay = (props) => {
  return (
    <div>has {props.voteCount} votes</div>
  )
}

const handleVote = (selected, votes, votesSetter, mostVotes, mostVotesSetter) => () => {
  votesSetter(votes);
  if (votes[selected] >= mostVotes["count"]) {
    mostVotesSetter({"idx": selected, "count": votes[selected]});
  }
}

const VotesButton = (props) => {
  let votesCopy = Array.from(props.votes);
  votesCopy[props.selected] += 1;
  return(
    <button onClick={handleVote(props.selected, votesCopy, props.setVotes, props.mostVotes, props.setMostVotes)}>vote</button>
  )
}

const MostVotes = (props) => {
  let mostPopularAnecdote = props.mostVotes["idx"] === null ? "" : anecdotes[props.mostVotes["idx"]];
  return(
    <div>{mostPopularAnecdote}</div>
  )
}

const OfTheDay = (props) => {
  return (
    <div>
      <Header title={props.title}/>
      <TextDisplay votes={props.votes} selected={props.selected} />
      <VotesButton selected={props.selected} votes={props.votes} setVotes={props.setVotes} setMostVotes={props.setMostVotes} mostVotes={props.mostVotes}/>
      <NextButton setSelected={props.setSelected} />
    </div>
  )
}

const WithMostVotes = (props) => {
  return(
    <div>
      <Header title={props.title}/>
      <MostVotes votes={props.votes} mostVotes={props.mostVotes}/>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf, 0));
  const [mostVotes, setMostVotes] = useState({"idx": null, "count": 0});
  const ofTheDay = "Anecdote of the day";
  const withMostVotes = "Anecdote with most votes";

  return (
    <div>
      <OfTheDay title={ofTheDay} votes={votes} setVotes={setVotes} selected={selected} setSelected={setSelected} mostVotes={mostVotes} setMostVotes={setMostVotes}/>
      <WithMostVotes title={withMostVotes} votes={votes} mostVotes={mostVotes} setMostVotes={setMostVotes}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)

