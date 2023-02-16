import { useState } from "react";

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


function goodInc(){return( setGood(good+1))}

function neutralInc(){ return(setNeutral(neutral+1))}

function badInc(){ return(setBad(bad+1))}


  return (
    <div>
      <h1>Give Feedback !</h1>

      <button onClick={goodInc}>Good</button> <b/>
      <button onClick={neutralInc}>Neutral</button> <b/>
      <button onClick={badInc}>Bad</button> <b/>
<h2>Statistics</h2>
      <p>Good {good} </p>
      <p>Neutral {neutral} </p>
      <p>Bad {bad} </p>
    </div>
  );
}

export default App;
