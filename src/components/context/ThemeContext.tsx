import React, { createContext } from 'react'
import { theme } from "./theme"

type ThemecontextProviderProps = {
    children: React.ReactNode
}

export const ThemeContext = createContext(theme)

const ThemeContextProvider = ({children}: ThemecontextProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  )
}

export default ThemeContextProvider
