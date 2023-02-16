import { useState } from "react";

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feedback !</h1>

      <button>Good</button> <b/>
      <button>Neutral</button> <b/>
      <button>Bad</button> <b/>

      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
