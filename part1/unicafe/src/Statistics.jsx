/* eslint-disable react/prop-types */

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
        <table>
            <tbody>
                <tr>
                    <td>good</td>
                    <td>{good}</td>
                </tr>
                <tr>
                    <td>neutral</td>
                    <td>{neutral}</td>
                </tr>
                <tr>
                    <td>bad</td>
                    <td>{bad}</td>
                </tr>
                <tr>
                    <td>all</td>
                    <td>{all}</td>
                </tr>
                <tr>
                    <td>average</td>
                    <td>{average}</td>
                </tr>
                <tr>
                    <td>positive</td>
                    <td>{positive} %</td>
                </tr>
            </tbody>
        </table>
        }
    </div>
  )
}

export default Statistics
