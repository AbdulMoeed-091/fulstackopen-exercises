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
    for(let i=0; i<persons.length; i++){
    if(newName === persons[i].name){
      alert(`${newName} is already present in Phonebook`)
      console.log( `Sorry! can't enter ${newName} in the phonebook!`)
    }
    else{
    setPersons(persons.concat(addNewName))
    setNewName('')}
  }}

  const handleName = (event) => {
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
      <div><ul>

        {persons.map(value => (value.name))}
      </ul>
     
      </div>

    </div>
  )
}
export default App;
