
const App = (props) => {

  const {notes} = props;

  return (
    <div>
      <h1>Notes</h1>
{notes.map(note=><li>{note.content}</li>)}


    </div>
  );
}

export default App;
