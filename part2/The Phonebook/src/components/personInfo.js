import { useState } from "react";


const PersonInfo=()=>{


  const [persons, setPersons] = useState([
    { name: 'Arto Hellas ',  number: '040-123456', id: 1 },
    { name: 'Ada Lovelace ', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov ', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck ', number: '39-23-6423122', id: 4 }
 ])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');


  const addName = (event) => {
    event.preventDefault();
    const addNewName = {
      name: newName,
      number: newNumber,
      id: persons.length+1
    }
    for (let i = 0; i < persons.length; i++) {
      if (newName.toLowerCase() === persons[i].name.toLowerCase()){
        alert(`${newName} is already present in Phonebook`);
        setNewName('')
        setNewNumber('')
        console.log(`Sorry! can't enter ${newName} in the phonebook!`)
        return;
      }
    
    else if(newName==''|| newNumber == ''){
      alert("Can't enter empty")
    }
    setPersons(persons.concat(addNewName))
    setNewName('')
    setNewNumber('')
  }
  }

  const handleName = (event) => {
    setNewName(event.target.value);
  }

  const handleNumber=(event)=>{
    setNewNumber(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          Name: <input value={newName} onChange={handleName} placeholder='Enter Name' />
          <br></br>
          Number: <input value={newNumber} onChange={handleNumber} placeholder='xx-xx-xxxxxx' />
          <br></br>

          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(value => <li key={value.id}>{value.name}{value.number}</li>)}

      </div>

    </div>
  )
}


export default PersonInfo;