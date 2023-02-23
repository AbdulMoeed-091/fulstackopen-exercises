import { useState } from "react";

const Filter=({persons})=>{


const [filter, setFilter]  = useState('');


const handleFilter =(event)=>{
    console.log(event.target.value);
    setFilter (event.target.value);
}

  
  const personsToShow = filter === ''
    ? persons
    : persons.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase()))

  const row_names = () => personsToShow.map(person => 
    <p key={person.name}>{person.name} {person.number}</p>
  
)
return(
    <div>
        Filter to show: <input value={row_names} onChange={handleFilter}/>
    </div>
)
  
}



export default Filter;