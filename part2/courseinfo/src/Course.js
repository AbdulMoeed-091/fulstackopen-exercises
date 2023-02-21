
const Course=(props)=>{

  const {course} = props;

  
  const total = course.parts.reduce((s, p) => {
    console.log(s, p)
    return s+p})

  return(

    <div>
<h1>{course.name}</h1>
<div>{course.parts.map(values=>{return(
    <p key={values.id}> {values.name}{values.exercises} </p> 
    
  )
    })}
    
    
  <h5> total of {total} exercises</h5>
  
  </div>

    </div>
  )
  
    

}



export default Course;