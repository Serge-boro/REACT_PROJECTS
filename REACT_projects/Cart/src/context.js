import React, { useState, useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'

const url = 'https://course-api.com/react-useReducer-cart-project'

const newContext = React.createContext()

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const RemoveAll = () => {
    dispatch({ type: 'REMOVE_ALL' })
  }
  const RemoveItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  const getFetch = async () => {
    dispatch({ type: 'LOADING' })
    const response = await fetch(url)
    const data = await response.json()
    dispatch({ type: 'DISPLAY_ITEMS', payload: data })
  }

  const toggleAmount = (id, type) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
  }

  useEffect(() => {
    getFetch()
  }, [])

  useEffect(() => {
    dispatch({ type: 'TOGGLE' })
  }, [state.cart])
  return (
    <newContext.Provider
      value={{ ...state, RemoveAll, RemoveItem, toggleAmount }}
    >
      {children}
    </newContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(newContext)
}
