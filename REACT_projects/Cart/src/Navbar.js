import React from 'react'
import { useGlobalContext } from './context'
import { FaShoppingCart } from 'react-icons/fa'
const Navbar = () => {
  const { amount } = useGlobalContext()
  return (
    <nav>
      <div className='nav-center'>
        <h3>useReducer + useContext project</h3>
        <div className='nav-container'>
          <FaShoppingCart className='shopCart' />
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
