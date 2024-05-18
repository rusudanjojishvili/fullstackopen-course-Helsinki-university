/* eslint-disable react/prop-types */

const MostVoted = ({ anecdotes, points }) => {

  const maxPointIndex = points.findIndex(item => item === Math.max.apply(null, points))
  return (
    <div>
    <h2>Anecdote with most votes</h2>
    {anecdotes[maxPointIndex]}
    <h4>{Math.max.apply(null, points)}</h4>
    </div>
  )
}

export default MostVoted
