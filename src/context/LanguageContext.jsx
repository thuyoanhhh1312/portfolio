import PropTypes from 'prop-types'
import { createContext, useContext, useMemo, useState } from 'react'

const LanguageContext = createContext({ lang: 'en', setLang: () => {} })

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() =>
    typeof globalThis !== 'undefined' && globalThis.localStorage ? globalThis.localStorage.getItem('lang') || 'en' : 'en'
  )

  const value = useMemo(
    () => ({
      lang,
      setLang: (next) => {
        setLang(next)
        if (typeof globalThis !== 'undefined' && globalThis.localStorage) globalThis.localStorage.setItem('lang', next)
      },
    }),
    [lang]
  )
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext)
