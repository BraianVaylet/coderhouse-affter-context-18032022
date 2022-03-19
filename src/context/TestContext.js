/* eslint-disable no-unused-vars */
import { createContext } from 'react'

export const TestContext = createContext()

export const TestContextProvider = ({ children }) => {
  const showMessage = () => console.log('🐤 Compra un pato!')

  return (
    <TestContext.Provider
      value={{ showMessage }}
    >
      {children}
    </TestContext.Provider>
  )
}
