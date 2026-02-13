import { useLanguage } from '../../context/LanguageContext'

const HeroSection = () => {
  const { t } = useLanguage()

  return (
    <section className="text-white py-20" style={{background: 'linear-gradient(135deg, #04babd 0%, #038a8d 100%)'}}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          {t('subtitle')}
        </h2>
        <p className="text-xl md:text-2xl text-white text-opacity-90 mb-8 max-w-3xl mx-auto">
          {t('description')}
        </p>
        <button 
          className="bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-lg"
          style={{color: '#04babd'}}
        >
          {t('contacts')}
        </button>
      </div>
    </section>
  )
}

export default HeroSection