const Total = ({ parts }) => {
  const sum = parts.reduce((sum, part) => {
    return sum + part.exercises
  }, 0);

  return (
    <p>Total of {sum} exercises</p>
  )
}

export default Total;