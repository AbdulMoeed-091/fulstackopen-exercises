import Add from "./components/personForm";
import Number from "./components/person";
import Filter from "./components/filter";
import { useState } from "react";



const App = () => {

  
const [persons, setPersons] = useState([
  { name: 'Arto Hellas ',  number: '040-123456', id: 1 },
  { name: 'Ada Lovelace ', number: '39-44-5323523', id: 2 },
  { name: 'Dan Abramov ', number: '12-43-234345', id: 3 },
  { name: 'Mary Poppendieck ', number: '39-23-6423122', id: 4 }
])


return(
  <div>
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} />
    
    </div>

  <div> 
  <h2> Add a new:</h2>
<Add persons={persons} setPersons={setPersons}/>
  </div>
  <div> 
  <h2>Numbers</h2>
  <Number persons={persons}/>
    </div>
  </div>
)
}
export default App;
