
const Course=(props)=>{

  const {course} = props;


  return(

    <div>
<h1>{course.name}</h1>
<div>{course.parts.map(values=>{
  return(
  
    <p key={values.id}> {values.name}{values.exercises} </p>
    
    )}
    
    )
    }</div>

    </div>
  )
    

}



export default Course;