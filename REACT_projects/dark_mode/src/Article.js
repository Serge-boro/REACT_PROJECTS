import React from 'react'
import moment from 'moment'
const Article = (item) => {
  const { snippet, title, date, length } = item
  return (
    <article className='post'>
      <h2>{title}</h2>
      <div className='post-info'>
        <span>{moment(date).format('MMMM dddd Do, YYYY')}</span>
        <span>{length} min write</span>
      </div>
      <p>{snippet}</p>
    </article>
  )
}

export default Article
