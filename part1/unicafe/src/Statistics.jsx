/* eslint-disable react/prop-types */

import StatisticLine from "./StatisticLine"

const Statistics = ({ feedbacks }) => {
    const { good, neutral, bad } = feedbacks
    const all = good + neutral + bad
    const average = (good * 1 + bad * (-1))/all
    const positive = good * 100/all

  return (
    <div>
        <h1>statistics</h1>
        {all === 0? 
        <h3>No feedback given</h3>:
        <div>
            <StatisticLine text={"good"} value={good} />
            <StatisticLine text={"neutral"} value={neutral} />
            <StatisticLine text={"bad"} value={bad} />
            <StatisticLine text={"all"} value={all} />
            <StatisticLine text={"average"} value={average} />
            <StatisticLine text={"positive"} value={`${positive} %`} />
        </div>}
    </div>
  )
}

export default Statistics
