import PropTypes from 'prop-types'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const ThemeContext = createContext({ mode: 'dark', toggle: () => {} })

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() =>
    typeof globalThis !== 'undefined' && globalThis.localStorage ? globalThis.localStorage.getItem('theme') || 'dark' : 'dark'
  )

  useEffect(() => {
    if (typeof globalThis !== 'undefined' && globalThis.document) {
      globalThis.document.documentElement.dataset.theme = mode
    }
    if (typeof globalThis !== 'undefined' && globalThis.localStorage) {
      globalThis.localStorage.setItem('theme', mode)
    }
  }, [mode])

  const toggle = () => setMode((m) => (m === 'light' ? 'dark' : 'light'))
  const value = useMemo(() => ({ mode, toggle }), [mode])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeMode = () => useContext(ThemeContext)
