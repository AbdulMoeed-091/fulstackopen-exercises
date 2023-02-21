import { useState } from "react";
import Note from "./note";

const App = (props) => {

  const [notes, setNotes] = useState(props.notes)
const [newNote, setNewNote] = useState('Hi, I am new note')

  const addNote = (event) => {
    event.preventDefault()
    console.log("Note Added", event.target)

  }
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
  return (
    <div>
      <h1>Notes</h1>
      <ul>

{notes.map(note=><Note key={note.id} note={note}/>
)}

      </ul>
<form onSubmit={addNote}>
<input value={newNote} onChange={handleNoteChange}/>
<button type="submit">Submit</button>
</form>
    </div>
  );
}

export default App;
