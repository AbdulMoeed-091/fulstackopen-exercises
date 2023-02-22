import { useState } from "react";
import Note from "./note";

const App = (props) => {

  const [notes, setNotes] = useState(props.notes)
const [newNote, setNewNote] = useState([]);
const [showAll, setShowAll] = useState(true);

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      id: notes.length+1,
      content: newNote,
      important: Math.random()<0.5
    }    
  setNotes(notes.concat(noteObject))
  setNewNote('')
  }

  const notesToShow = showAll?notes:notes.filter(note => note.important ===true)

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>

{/* {notes.map(note=><Note key={note.id} note={note}/>
)} */}
{notesToShow.map(note=><Note key={note.id} note={note}/>
)}
      </ul>
<form onSubmit={addNote}>
<input value={newNote} onChange={handleNoteChange} placeholder="Enter note here!"/>
<button type="submit">Submit</button>
</form>
    </div>
  );
}

export default App;
