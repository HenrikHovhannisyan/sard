import { createContext, useContext, useState } from 'react'
import translations from './locales'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('hy') // Armenian default

  const languages = {
    hy: 'Հայ',
    ru: 'Рус',
    en: 'Eng'
  }

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[currentLanguage]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }

  const changeLanguage = (lang) => {
    if (languages[lang]) {
      setCurrentLanguage(lang)
    }
  }

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      languages,
      t,
      changeLanguage
    }}>
      {children}
    </LanguageContext.Provider>
  )
}