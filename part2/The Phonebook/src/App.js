import { useState } from "react";
import Note from "./note";

const App = (props) => {

  const [notes, setNotes] = useState(props.notes)


  const addNote = (event) => {
    event.preventDefault()
    console.log("Note Added", event.targrt)

  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>

{notes.map(note=><Note key={note.id} note={note}/>
)}

      </ul>
<form onSubmit={addNote}>
<input></input>
<button type="submit">Submit</button>
</form>
    </div>
  );
}

export default App;
