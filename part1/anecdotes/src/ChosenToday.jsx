/* eslint-disable react/prop-types */

const ChosenToday = ({ anecdotes, selected, points, handleVote, handleGenerateNext }) => {
  return (
    <div>
        <h2>Anecdote of the day</h2>
        {anecdotes[selected]}
        <h4>has {points[selected]} votes</h4>
        <div>
        <button onClick={() => handleVote(selected)}>vote</button>
        <button onClick={handleGenerateNext}>next anecdote</button>
        </div>
    </div>
  )
}

export default ChosenToday
