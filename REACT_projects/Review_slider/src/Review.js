import React, { useEffect, useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { image, name, job, text } = people[index]

  const checkItem = (item) => {
    if (item > people.length - 1) {
      item = 0
    }
    if (item < 0) {
      item = people.length - 1
    }
    return item
  }

  const randomBtn = () => {
    let random = Math.floor(Math.random() * people.length)
    if (random === index) {
      random = index + 1
    }
    setIndex(checkItem(random))
  }

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldSlide) => {
        let item = oldSlide + 1
        if (item > people.length - 1) {
          item = 0
        }
        return item
      })
    }, 5000)
    return () => clearInterval(slider)
  }, [index])

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button
          className='prev-btn'
          onClick={() => setIndex(checkItem(index - 1))}
        >
          <FaChevronLeft />
        </button>
        <button
          className='next-btn'
          onClick={() => setIndex(checkItem(index + 1))}
        >
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomBtn}>
        random
      </button>
    </article>
  )
}

export default Review
