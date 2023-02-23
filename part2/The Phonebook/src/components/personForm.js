import { useState } from "react";

const Add=(props)=>{

  const {persons, setPersons} = props;

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
      if (newName.toLowerCase() === persons[i].name.toLowerCase() || newNumber===persons[i].number){
        alert(`${newName} is already present in Phonebook`);
        setNewName('')
        setNewNumber('')
        console.log(`Sorry! can't enter ${newName} in the phonebook!`)
       return;
      }
    
    else if(newName==''|| newNumber == ''){
      alert("All fields must be filled")
      return;
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
     
      <form onSubmit={addName}>
        <div>
        
          Name: <input value={newName} onChange={handleName} placeholder='Enter Name' />
          <br></br>
          Number: <input value={newNumber} onChange={handleNumber} placeholder='xx-xx-xxxxxx' />
          <br></br>

          <button type="submit">Add</button>
        </div>
      </form>

     
    </div>
  )
}


export default Add;