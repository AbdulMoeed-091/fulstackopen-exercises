import { useState } from "react";


const Statistics=(props)=>{
return(
<>
<p>good {props.good}</p>
<p>neutral {props.neutral}</p>
<p>bad {props.bad}</p>
<p>all {props.all}</p>
<p>average {props.average}</p>
<p>positive {props.positive}%</p>
</>

)

}


const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


function goodInc(){return( setGood(good+1))}

function neutralInc(){ return(setNeutral(neutral+1))}

function badInc(){ return(setBad(bad+1))}

const all = good+neutral+bad
const average = all/3
const positive = (good/all)*100

  return (
    <div>
      <h1>Give Feedback !</h1>
      <button onClick={goodInc}>Good</button> <b/>
      <button onClick={neutralInc}>Neutral</button> <b/>
      <button onClick={badInc}>Bad</button> <b/>
      <h2>Statistics</h2>
      <Statistics 
      good={good} 
      neutral={neutral} 
      bad={bad} 
      all={all} 
      average={average}
      positive={positive} />
    </div>
  );
}

export default App;
