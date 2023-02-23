import { useState } from "react";

const Filter=({persons, setPersons})=>{


const [filter, setFilter]  = useState(persons)


const handleFilter =(event)=>{
    setFilter (event.target.value);
 
    const updatedList = [...persons];
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase()
    });
      setFilter(updatedList);
  };

return(
    <div>
        Filter to show: <input value={filter} onChange={handleFilter}/>
    </div>
)
  
}



export default Filter;