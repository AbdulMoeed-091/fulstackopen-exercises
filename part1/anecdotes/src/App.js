import { useState } from "react"

const App = () => {

  const [currentAnecdote, setCurrentAnecdote] = useState(0);
  const [votes, setvotes] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]


  function random() {
    const rand = Math.floor(Math.random() * anecdotes.length);
    return rand

  }

  function givevotes() {
    // Destructuring of votes to updatevotes
    const updatedvotes = [...votes]
    for (let i = 0; i < anecdotes.length; i++) {
      if (i === currentAnecdote) {
        updatedvotes[i] = votes[currentAnecdote] + 1;
      } else {
        updatedvotes[i] = votes[i];
      }
    }
    setvotes(updatedvotes);
    console.log(votes, votes[currentAnecdote])
  }


  function max() {
    const num = Math.max(...votes);
    return num
  }

  const bestAnecdote = anecdotes[votes.indexOf(max())];
  console.log(bestAnecdote);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p> {anecdotes[currentAnecdote]}</p>
      <p>has {votes[currentAnecdote]} votes</p>
      <button onClick={givevotes}>vote</button> <b />
      <button onClick={() => setCurrentAnecdote(random())}>Next Anecdote</button>

      <h1>Anecdote with most votes</h1>
      <p>{bestAnecdote}</p>
      <p>has {max()} votes</p>
    </div>
  );
}

export default App;
