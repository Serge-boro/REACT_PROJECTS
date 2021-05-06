import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = ({ title, info }) => {
  const [unswer, setUnswer] = useState(false)
  return (
    <article className='question'>
      <header>
        <p className='question-title'>{title}</p>
        <button className='question-btn' onClick={() => setUnswer(!unswer)}>
          {unswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {unswer && <p className='question-text'>{info}</p>}
    </article>
  )
}

export default Question
