import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const messages = {
  hy: { title: 'Էջը չի գտնվել', text: 'Խնդրում ենք վերադառնալ գլխավոր էջ', home: 'Գլխավոր' },
  ru: { title: 'Страница не найдена', text: 'Пожалуйста, вернитесь на главную', home: 'Главная' },
  en: { title: 'Page not found', text: 'Please go back to home', home: 'Home' }
}

const NotFoundPage = () => {
  const { currentLanguage } = useLanguage()
  const m = messages[currentLanguage] || messages.en
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{m.title}</h1>
        <p className="text-gray-600 mb-6">{m.text}</p>
        <Link
          to="/"
          className="inline-block px-6 py-2 rounded-lg font-semibold text-white"
          style={{backgroundColor: 'var(--primary-color)'}}
        >
          {m.home}
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
