import React from 'react'
import { useGlobalContext } from './context'
import { FaPlus, FaMinus } from 'react-icons/fa'
const CartItem = ({ id, img, title, price, amount }) => {
  const { RemoveItem, toggleAmount } = useGlobalContext()
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button className='remove-btn' onClick={() => RemoveItem(id)}>
          remove
        </button>
      </div>
      <div>
        <button className='amount-btn' onClick={() => toggleAmount(id, 'inc')}>
          <FaPlus />
        </button>
        <p className='amount'>{amount}</p>
        <button className='amount-btn' onClick={() => toggleAmount(id, 'dec')}>
          <FaMinus />
        </button>
      </div>
    </article>
  )
}

export default CartItem
