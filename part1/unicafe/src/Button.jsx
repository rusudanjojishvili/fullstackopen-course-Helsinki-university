/* eslint-disable react/prop-types */

const Button = ({handleFeedback, feedback}) => {
  return (
    <button onClick={() => handleFeedback(feedback)}>{feedback}</button>
  )
}

export default Button
