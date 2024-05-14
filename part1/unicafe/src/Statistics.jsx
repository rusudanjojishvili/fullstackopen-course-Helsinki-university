/* eslint-disable react/prop-types */

import StatisticLine from "./StatisticLine"

const Statistics = ({ feedbacks }) => {
const all = feedbacks.good + feedbacks.neutral + feedbacks.bad
const average = (feedbacks.good * 1 + feedbacks.bad * (-1))/all
const positive = feedbacks.good * 100/all

  return (
    <div>
        <h1>statistics</h1>
        {all === 0? 
        <h3>No feedback given</h3>:
        <div>
            <StatisticLine text={"good"} value={feedbacks.good} />
            <StatisticLine text={"neutral"} value={feedbacks.neutral} />
            <StatisticLine text={"bad"} value={feedbacks.bad} />
            <StatisticLine text={"all"} value={all} />
            <StatisticLine text={"average"} value={average} />
            <StatisticLine text={"positive"} value={`${positive} %`} />
        </div>}
    </div>
  )
}

export default Statistics
