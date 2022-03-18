/* eslint-disable no-unused-vars */
import { createContext, useState } from 'react'

// Consigna!
// addItem(item, quantity) // agregar cierta cantidad de un ítem al carrito
// removeItem(itemId) // Remover un item del cart por usando su id
// clear() // Remover todos los items
// isInCart: (id) => true|false
export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
  // estado cart
  const [cart, setCart] = useState([])

  // 1. addItem() ✅
  const addItem = (product, count) => {
    // Mi producto en cart
    let cartProduct = { product, count } // 👉 { product: Object, count: integer }
    // Cart auxiliar (=== cart)
    let cartAux = []
    // Item esta en cart?
    if (isInCart(product)) {
      // 1. buscar el elemento
      // 2. modificar el count
      // 3. actualizo cartAux con el valor de cart

      console.log('Esta en 🛒')
      // modificamos el count
      // 1. buscar el elemento
      cartProduct = cart.find(item => item.product === product)
      // 2. modificar el count
      cartProduct.count = cartProduct.count + count
      // 3. actualizo cartAux con el valor de cart
      cartAux = [...cart]
    } else {
      console.log('NO esta en 🛒')
      // actualizo cartAux con el nuevo producto
      cartAux = [cartProduct, ...cart]
    }
    setCart(cartAux)
  }

  // 2. removeItem ✅
  const removeItem = product => {
    // 1. si esta en el carrito
    // 2. buscar el producto y quitarlo
    // 3. actualizar el estado de cart

    console.log('product:removeItem', product)
    // 1. si esta en el carrito
    if (isInCart(product)) {
      // 2. buscar el producto y quitarlo
      const cartAux = cart.filter(item => item.product !== product)
      // 3. actualizar el estado de cart
      setCart(cartAux)
    }
  }

  // 3.clear ✅
  const clear = () => {
    setCart([])
  }

  // 4. isInCart ✅
  const isInCart = product => {
    return cart && cart.some(item => item.product === product)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
