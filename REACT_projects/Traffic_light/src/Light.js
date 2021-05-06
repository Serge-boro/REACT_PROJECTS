import React, { useState } from 'react'

const Light = ({ image1, image2, image3, image4, image5, image6 }) => {
  const [showRed, setShowRed] = useState(false)
  const [showYellow, setShowYellow] = useState(false)
  const [showGreen, setShowGreen] = useState(true)

  const changeLight = () => {
    if (showRed) {
      setShowRed(false)
      setShowYellow(false)
      setShowGreen(true)
    }
    if (showYellow) {
      setShowRed(true)
      setShowYellow(false)
      setShowGreen(false)
    }
    if (showGreen) {
      setShowRed(false)
      setShowYellow(true)
      setShowGreen(false)
    }
  }
  return (
    <>
      <article onClick={() => changeLight()} className='article1'>
        {showRed && (
          <div>
            <img src={image2} alt='' className='color' />
            <img src={image4} alt='' className='color' />
            <img src={image5} alt='' className='color' />
          </div>
        )}

        {showYellow && (
          <div>
            <img src={image1} alt='' className='color' />
            <img src={image3} alt='' className='color' />
            <img src={image5} alt='' className='color' />
          </div>
        )}
        {showGreen && (
          <div>
            <img src={image1} alt='' className='color' />
            <img src={image4} alt='' className='color' />
            <img src={image6} alt='' className='color' />
          </div>
        )}
      </article>

      <article></article>
    </>
  )
}

export default Light
