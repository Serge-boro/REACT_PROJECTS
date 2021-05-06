import React, { useState } from 'react'
const Light2 = ({ image1, image2 }) => {
  const [color, setColor] = useState(false)

  return (
    <main className='main'>
      <article className='article2'>
        {color ? (
          <img
            src={image2}
            alt=''
            onClick={() => setColor(!color)}
            className='color'
          />
        ) : (
          <img
            src={image1}
            alt=''
            onClick={() => setColor(!color)}
            className='color'
          />
        )}
      </article>
    </main>
  )
}

export default Light2
