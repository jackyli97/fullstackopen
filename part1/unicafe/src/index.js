import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const handleClick = (setter, counter) => () => {
  setter(counter+1)
}

const Header = ({title}) => {
  return (
    <h1>{title}</h1>
  )
}

const Button = (props) => {
  return (
    <button onClick={handleClick(props.setter, props.counter)}> {props.option}</button>
  )
}

const Feedback = (props) => {
  return(
    <div>
      <Header title={props.title}/>
      <div>
        <Button option={props.options[0]} counter={props.counters[0]} setter={props.setters[0]}/>
        <Button option={props.options[1]} counter={props.counters[1]} setter={props.setters[1]}/>
        <Button option={props.options[2]} counter={props.counters[2]} setter={props.setters[2]}/>
      </div>
    </div>
  )
}

const all = (counters) => {
  return counters.reduce((a,b)=>{
    return a+b;
  })
}

const average = (counters) => {
  const total = all(counters)
  // if (total === 0) return 0;
  let sum = (counters[0]*1) + (counters[2]*-1);
  return sum/total;
}

const positive = (counters) => {
  const total = all(counters)
  // if (total===0)return "0%"
  return `${(counters[0] / total)*100}%`;
}

const Score = (props) => {
  return (
    <tr>
      <td>{props.option}</td>
      <td>{props.counter}</td>
    </tr>
  )
}

const Calculation = (props) => {
  let result = null;
  if (props.text === "All")result=all(props.counters)
  else if (props.text === "Average")result=average(props.counters)
  else if (props.text === "Positive")result=positive(props.counters);
  return (
    <tr>
      <td>{props.text}</td>
      <td>{result}</td>
    </tr>
  )
}

const Calculations = (props) => {
  return(
    <table>
      <Score option={props.options[0]} counter={props.counters[0]} />
      <Score option={props.options[1]} counter={props.counters[1]} />
      <Score option={props.options[2]} counter={props.counters[2]} />
      <Calculation text={props.texts[0]} counters={props.counters}/>
      <Calculation text={props.texts[1]} counters={props.counters}/>
      <Calculation text={props.texts[2]} counters={props.counters}/>
    </table>
  )
}

const StatsContent = (props) => {
  const total = all(props.counters)
  if(total===0)return(
    <>No feedback given</>
  )
  return(
    <>
      <Calculations options={props.options} texts={props.texts} counters={props.counters} />
    </>
  )
}

const Statistics = (props) => {
  const all = "All";
  const average = "Average";
  const positive = "Positive";

  return (
    <div>
      <Header title={props.title} />
      <StatsContent options={props.options} texts={[all, average, positive]} counters={props.counters}/>
    </div> 
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const ratings = {"Good": good,
  "Neutral": neutral,
  "Bad": bad};
  const feedback = "Give Feedback";
  const statistics = "Statistics";

  return (
    <div>
      <Feedback title={feedback} options={Object.keys(ratings)} counters={Object.values(ratings)} setters={[setGood, setNeutral, setBad]}/>
      <Statistics title={statistics} options={Object.keys(ratings)} counters={Object.values(ratings)} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)