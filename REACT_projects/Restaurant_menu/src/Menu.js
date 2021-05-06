import React from 'react'

const Menu = ({ ItemMenu }) => {
  return (
    <div className='section-center'>
      {ItemMenu.map((item) => {
        const { id, title, price, img, desc } = item
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <h4>{title}</h4>
              <h4 className='price'>{price}</h4>
              <div className='item-header'></div>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Menu
