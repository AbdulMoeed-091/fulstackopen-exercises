
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  const exercise1 = 14
  const exercise2 = 6
  const exercise3 = 15

  return (
    <>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total exercise1={exercise1} exercise2={exercise2} exercise3={exercise3} />
    </>
  );

}

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1> {props.course}</h1>
    </div>
  )
}
const Content = (props) => {

  return(
    <div>
      <p>{props.part1}</p>
      <p>{props.part2}</p>
      <p>{props.part3}</p>
    </div>
  )
}
const Total = (props) => {

  //Destructuring of object:
  const {exercise1, exercise2, exercise3} = props
  return (
    <div>
      <p>Number of exercises = {exercise1 + exercise2 + exercise3}</p>

      {/* <p>Number of exercises = {props.exercise1 + props.exercise2 + props.exercise3}</p> */}

    </div>
  )
}

export default App;
