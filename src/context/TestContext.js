/* eslint-disable no-unused-vars */
import { createContext } from 'react'

export const TestContext = createContext()

export const TestContextProvider = ({ children }) => {
  return (
    <TestContext.Provider
      value={{}}
    >
      {children}
    </TestContext.Provider>
  )
}
