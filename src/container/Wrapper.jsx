import { ChakraProvider } from '@chakra-ui/react'
import { CartContextProvider } from 'context/CartContext'
import { TestContextProvider } from 'context/TestContext'
import customTheme from 'styles/theme'

const Wrapper = ({ children }) => {
  return (
    <CartContextProvider>
      <TestContextProvider>
        <ChakraProvider theme={customTheme}>
          {children}
        </ChakraProvider>
      </TestContextProvider>
    </CartContextProvider>
  )
}

export default Wrapper
