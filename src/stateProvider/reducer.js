export const initialState = {
  movies: [
    { id: '1', title: 'movie1' },
    { id: '2', title: 'movie2' },
    { id: '3', title: 'movie3' },
  ],
}

// state is like in class component
// action is like we add an item into the cart
const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case 'ADD_TO_CART':
      let cartCopy = [...state.cart]
      let newItemIndex = cartCopy.findIndex((i) => i.id === action.item.id)
      if (newItemIndex < 0) {
        cartCopy.push({ ...action.item, quantity: 1 })
      } else {
        const newItem = {
          ...cartCopy[newItemIndex],
        }
        newItem.quantity += 1
        cartCopy[newItemIndex] = newItem
      }

      return { ...state, cart: cartCopy }
    case 'EMPTY_CART':
      return {
        ...state,
        cart: [],
      }
    case 'REMOVE_FROM_CART':
      // Logic for removing item from cart

      // we cloned the cart
      let newCart = [...state.cart]

      // we find the index of the item
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      )

      if (index >= 0) {
        // item exists in cart, remove it....
        newCart.splice(index, 1)
      } else {
        // console.warn() is a RED console.log()
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in cart`
        )
      }

      return { ...state, cart: newCart }
    default:
      return state
  }
}
export default reducer
