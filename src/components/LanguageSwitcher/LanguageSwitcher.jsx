import { useLanguage } from '../../context/LanguageContext'

const LanguageSwitcher = () => {
  const { currentLanguage, languages, changeLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-2">
      {Object.entries(languages).map(([code, name]) => (
        <button
          key={code}
          onClick={() => changeLanguage(code)}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 ${
            currentLanguage === code
              ? 'bg-white shadow-sm'
              : 'text-white hover:text-white hover:bg-black hover:bg-opacity-10'
          }`}
          style={currentLanguage === code ? {color: '#04babd'} : {}}
        >
          {name}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher