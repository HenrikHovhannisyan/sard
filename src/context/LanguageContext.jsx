import { createContext, useContext, useState } from 'react'

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

  const translations = {
    hy: {
      home: 'Գլխավոր',
      about: 'Մեր մասին',
      news: 'Նորություններ',
      contacts: 'Կապ',
      title: 'Sard Engineering',
      subtitle: 'Բարի գալուստ Sard Engineering',
      description: 'Ինովացիոն ինժեներական լուծումներ ժամանակակից աշխարհի համար',
      services: {
        design: 'Նախագծում',
        designDesc: 'Ինժեներական համակարգերի համապարփակ նախագծում',
        consulting: 'Խորհրդատվություն',
        consultingDesc: 'Փորձագիտական խորհրդատվություն տեխնիկական հարցերով',
        implementation: 'Իրականացում',
        implementationDesc: 'Նախագծերի իրականացման ամբողջական ցիկլ'
      },
      footer: {
        description: 'Մասնագիտական ինժեներական լուծումներ ձեր բիզնեսի համար',
        contactsTitle: 'Կապ',
        socialTitle: 'Սոցիալական ցանցեր',
        copyright: '© 2026 Sard Engineering: Բոլոր իրավունքները պաշտպանված են:'
      }
    },
    ru: {
      home: 'Главная',
      about: 'О нас',
      news: 'Новости',
      contacts: 'Контакты',
      title: 'Sard Engineering',
      subtitle: 'Добро пожаловать в Sard Engineering',
      description: 'Инновационные инженерные решения для современного мира',
      services: {
        design: 'Проектирование',
        designDesc: 'Комплексное проектирование инженерных систем',
        consulting: 'Консультации',
        consultingDesc: 'Экспертные консультации по техническим вопросам',
        implementation: 'Реализация',
        implementationDesc: 'Полный цикл реализации проектов'
      },
      footer: {
        description: 'Профессиональные инженерные решения для вашего бизнеса',
        contactsTitle: 'Контакты',
        socialTitle: 'Социальные сети',
        copyright: '© 2026 Sard Engineering. Все права защищены.'
      }
    },
    en: {
      home: 'Home',
      about: 'About',
      news: 'News',
      contacts: 'Contacts',
      title: 'Sard Engineering',
      subtitle: 'Welcome to Sard Engineering',
      description: 'Innovative engineering solutions for the modern world',
      services: {
        design: 'Design',
        designDesc: 'Comprehensive engineering systems design',
        consulting: 'Consulting',
        consultingDesc: 'Expert consulting on technical matters',
        implementation: 'Implementation',
        implementationDesc: 'Full project implementation cycle'
      },
      footer: {
        description: 'Professional engineering solutions for your business',
        contactsTitle: 'Contacts',
        socialTitle: 'Social Networks',
        copyright: '© 2026 Sard Engineering. All rights reserved.'
      }
    }
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