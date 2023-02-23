import { useState } from "react";

const Filter=(props)=>{

    const {persons, setPersons} = props;

const [show, setShow]  = useState(true);


const toShow = show?persons: persons.filter()


}



export default Filter;