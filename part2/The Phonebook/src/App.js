import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('');


  const addName = (event) => {
    event.preventDefault();
    const addNewName = {
      name: newName
    }
    setPersons(persons.concat(addNewName))
    setNewName('')
  }

  const handleName = (event) => {
    // console.log(event.target.value);
    setNewName(event.target.value);
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          Name: <input value={newName} onChange={handleName} />
          <br></br>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(value => (value.name))}
     
      </div>

    </div>
  )
}
export default App;
