import Wrapper from 'container/Wrapper'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <StrictMode>
    <Wrapper>
      <App />
    </Wrapper>
  </StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
