import { useState } from "react";


const Statistics = (props) => {
  return (
    <>
      <table>
        <tr><td>good</td><td> {props.good}</td></tr>
        <tr><td>bad</td><td> {props.bad}</td></tr>
        <tr><td>all</td><td> {props.all}</td></tr>
        <tr><td>average</td><td> {props.average}</td></tr>
        <tr><td>positive</td><td> {props.positive}</td></tr>

      </table>
    </>

  )
}


const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  function goodInc() { return (setGood(good + 1)) }
  function neutralInc() { return (setNeutral(neutral + 1)) }
  function badInc() { return (setBad(bad + 1)) }

  const all = good + neutral + bad
  const average = all / 3
  const positive = (good / all) * 100

  return (
    <div>
      <h1>Give Feedback !</h1>
      <button onClick={goodInc}>Good</button> <b />
      <button onClick={neutralInc}>Neutral</button> <b />
      <button onClick={badInc}>Bad</button> <b />
      <h2>Statistics</h2>
      {
        all < 1 && <div>No feedback given</div>
      }
      {
        all > 0 &&
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          all={all}
          average={average}
          positive={positive} />
      }
    </div>
  );
}

export default App;
