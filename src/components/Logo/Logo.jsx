import { useLanguage } from '../../context/LanguageContext'

const Logo = () => {
  const { t } = useLanguage()

  return (
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
        <span className="font-bold text-xl" style={{color: '#04babd'}}>S</span>
      </div>
      <div className="hidden sm:block">
        <h1 className="text-xl font-bold text-white">{t('title')}</h1>
      </div>
    </div>
  )
}

export default Logo