import { ChakraProvider } from '@chakra-ui/react'
import Wrapper from 'container/WrapperContext'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import customTheme from 'styles/theme'
import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <StrictMode>
    <Wrapper>
      <ChakraProvider theme={customTheme}>
        <App />
      </ChakraProvider>
    </Wrapper>
  </StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
