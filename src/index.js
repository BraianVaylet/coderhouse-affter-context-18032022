import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ChakraProvider } from '@chakra-ui/react'
import customTheme from 'styles/theme'
import { CartContextProvider } from 'context/CartContext'

ReactDOM.render(
  <StrictMode>
    <CartContextProvider>
      <ChakraProvider theme={customTheme}>
        <App />
      </ChakraProvider>
    </CartContextProvider>
  </StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
