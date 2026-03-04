/* eslint-disable react-refresh/only-export-components */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider, theme as antdTheme } from 'antd'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from './context/LanguageContext'
import { ThemeProvider, useThemeMode } from './context/ThemeContext'

const Providers = ({ children }) => {
  const { mode } = useThemeMode()
  return (
    <ConfigProvider
      theme={{
        algorithm: mode === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
        token: {
          colorPrimary: '#0ea5e9',
          borderRadius: 12,
          fontFamily: 'Roboto, system-ui, -apple-system, sans-serif',
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Providers>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </Providers>
    </ThemeProvider>
  </StrictMode>
)
