import { useLanguage } from '../../context/LanguageContext'

const AboutSection = () => {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6" style={{color: '#04babd'}}>
            {t('aboutTitle')}
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            {t('aboutDescription')}
          </p>
          <a 
            href="#about"
            className="inline-block px-8 py-3 rounded-lg font-semibold text-white transition-all duration-200 shadow-lg hover:shadow-xl hover:transform hover:-translate-y-1"
            style={{backgroundColor: '#04babd'}}
          >
            {t('aboutLearnMore')}
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutSection