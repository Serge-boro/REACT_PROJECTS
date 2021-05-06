import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'
function App() {
  const [question, setQuestion] = useState(data)
  return (
    <main>
      <section className='questions'>
        <div className='title'>
          <h2>general questions</h2>
        </div>
        <div className='section-center'>
            {question.map((item) => {
              return <SingleQuestion key={item.id} {...item} />
            })}
        </div>
      </section>
    </main>
  )
}

export default App
