import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { data } from './date'

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [movie, setMovie] = useState(data)
  const [count, setCount] = useState(0)

  const { name, dates, description, title } = movie[count]
  return (
    <>
      <div className='title'>
        <h1> movie afisha</h1>
        <div className='underline'></div>
      </div>
      <article className='section'>
        <div className='movie-center'>
          <div className='btn-container'>
            {movie.map((item, idx) => {
              return (
                <button
                  type='button'
                  key={idx}
                  className={`movie-btn ${idx === count && 'active-btn'}`}
                  onClick={() => setCount(idx)}
                >
                  {item.name}
                </button>
              )
            })}
          </div>
          <div className='movie-info'>
            <h3>{title}</h3>
            <h4>{name}</h4>
            <p className='movie-date'>{dates}</p>
            {description.map((item, idx) => {
              return (
                <div className='movie-desc' key={idx}>
                  <FaAngleDoubleRight className='movie-icon' />
                  <p>{item}</p>
                </div>
              )
            })}
          </div>
        </div>
      </article>
    </>
  )
}

export default App
