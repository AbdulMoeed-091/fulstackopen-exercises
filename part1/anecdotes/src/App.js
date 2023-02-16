import { useState } from "react"

const App =()=> {

const[num, setnum] = useState('If it hurts, do it more often.');
const[vote, setVote] = useState(0);

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

function random (){
  const rand = anecdotes[Math.floor(Math.random()*anecdotes.length)]

 setnum(rand);
}

function giveVote(){
  
 setVote(vote+1);
}

  return (
    <div>
      <h1>Anecdote of the day</h1>
        <p> {num}</p>
        <p>has {vote} votes</p>
        <button onClick={giveVote}>Vote</button> 
        <button onClick={random}>Next Anecdote</button>
    </div>
  );
}

export default App;
