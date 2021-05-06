import React, { useState } from 'react'
import data from './data'
function App() {
  const [text, setText] = useState([])
  const [count, setCount] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()

    let value = parseInt(count)
    if (value < 0 || value > 9) {
      setText(data.slice(0, 1))
    } else {
      setText(data.slice(0, value))
    }
  }

  return (
    <section className='section-center'>
      <h3>Find your proportion in articles...</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          id='amount'
          name='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className='btn'>generate</button>
      </form>
      <article>
        {text.map((item, idx) => {
          return <p key={idx}>{item}</p>
        })}
      </article>
    </section>
  )
}

export default App
