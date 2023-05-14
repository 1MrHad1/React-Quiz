import React from 'react'
import "./Instruction.css"
const Instruction = () => {

    const totalTime = '10 minutes';

  return (
    <div className='instruction-container'>
      <h2>Instructions</h2>
      <ul>
        <li>You will have {totalTime} to complete the quiz.</li>
        <li>The quiz consists of multiple-choice questions.</li>
        <li>Select the answer that you believe is correct for each question.</li>
        <li>Once you submit your answers, you will not be able to change them.</li>
        <li>Good luck!</li>
      </ul>
    </div>
  )
}

export default Instruction