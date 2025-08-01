const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <p>{props.name} {props.exercises}</p>
  );
};

const Content = (props) => {
  console.log(props)
  return (
    <div>
      {props.parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Total = (props) => {
  console.log(props)
  const totalExercises = props.parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <div>
      <p>Number of exercises {totalExercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header title={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
