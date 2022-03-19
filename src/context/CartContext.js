/* eslint-disable no-unused-vars */
import { createContext, useState } from 'react'

export const CartContext = createContext()

// desafio:
// addItem
// removeItem
// clear
// isInCart

export const CartContextProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [cart, setCart] = useState([])

  // addItem ✅
  const addItem = (product, count) => {
    let cartProduct = { product, count }
    let cartAux = []
    if (isInCart(product)) {
      console.log('esta en el 🛒')
      // 1. buscar elemento en el carrito
      cartProduct = cart.find(item => item.product === product)
      // 2. modificando count
      cartProduct.count = cartProduct.count + count
      // actualizar cartAux
      cartAux = [...cart]
    } else {
      console.log('NO esta en el 🛒')
      // agregamos producto al carrito
      cartAux = [cartProduct, ...cart]
    }
    setCart(cartAux)
  }

  // removeItem
  const removeItem = (product) => {
    // 1. si esta en el carrito
    if (isInCart(product)) {
      console.log('removeItem(): esta en el 🛒')
      // 2. buscar dentro del carrito
      const cartAux = cart.filter(item => item.product !== product)
      // 3. actualizar carrito
      setCart(cartAux)
    }
  }

  // clear ✅
  const clear = () => {
    setCart([])
  }

  // isInCart ✅
  const isInCart = (product) => {
    // 1. Revisar que el carrito tenga algo
    // 2. Revisar que el producto este en el carrito
    return cart && cart.some(item => item.product === product)
  }

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        clear,
        cart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
