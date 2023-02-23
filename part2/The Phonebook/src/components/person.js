import { useState } from "react";


const Number =({persons})=>{

      return(
            <div>
            
            {persons.map(value=><li key={value.name}>{value.name}{value.number}</li>)}
          </div>

      )

}


export default Number;