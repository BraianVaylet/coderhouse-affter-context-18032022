import { CartContextProvider } from 'context/CartContext'
import { TestContextProvider } from 'context/TestContext'

const Wrapper = ({ children }) => {
  return (
    <CartContextProvider>
      <TestContextProvider>
        {children}
      </TestContextProvider>
    </CartContextProvider>
  )
}

export default Wrapper
