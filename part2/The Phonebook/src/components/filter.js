import { useState } from "react";

const Filter=({persons})=>{


const [filter, setFilter]  = useState('');


const handleFilter =(event)=>{
    setFilter (event.target.value);
}

  
  const personsToShow = filter === ''
    ? persons
    : persons.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase()))

  const row = () => personsToShow.map(person => 
    <p key={person.name}>{person.name} </p>
  
)
return(
    <div>
        Filter to show: <input value={row} onChange={handleFilter}/>
    </div>
)
  
}



export default Filter;