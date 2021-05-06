const reducer = (state, action) => {
  if (action.type === 'REMOVE_ALL') {
    return { ...state, cart: [] }
  }
  if (action.type === 'REMOVE_ITEM') {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    }
  }
  if (action.type === 'TOGGLE') {
    let { total, amount } = state.cart.reduce(
      (totalAll, totalCart) => {
        const { price, amount } = totalCart
        totalAll.amount += amount
        totalAll.total += price * amount
        return totalAll
      },
      { total: 0, amount: 0 }
    )
    total = parseFloat(total.toFixed(2))
    return { ...state, total, amount }
  }
  if (action.type === 'LOADING') {
    return { ...state, loading: true }
  }
  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, cart: action.payload, loading: false }
  }
  if (action.type === 'TOGGLE_AMOUNT') {
    return {
      ...state,
      cart: state.cart
        .map((item) => {
          if (item.id === action.payload.id) {
            if (action.payload.type === 'inc') {
              return { ...item, amount: item.amount + 1 }
            }
            if (action.payload.type === 'dec') {
              return { ...item, amount: item.amount - 1 }
            }
          }
          return item
        })
        .filter((item) => item.amount !== 0),
    }
  }
  throw new Error('no matches items')
}

export default reducer
