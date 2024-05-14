import { useState } from 'react'
import Statistics from './Statistics'
import Button from './Button'

const App = () => {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0  
  })

  const handleFeedback = (feedback) => {
    const updatedFeedBack = feedbacks[feedback] + 1
    setFeedbacks({...feedbacks, [feedback]: updatedFeedBack })
  }

  const buttonProps = {
    handleFeedback
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button {...buttonProps} feedback={"good"}/>
      <Button {...buttonProps} feedback={"neutral"}/>
      <Button {...buttonProps} feedback={"bad"}/>
      <Statistics feedbacks={feedbacks} />
    </div>
  )
}

export default App