import { useLanguage } from '../context/LanguageContext'
import { aboutCompanyData } from '../config/aboutCompany'
import ProjectsSection from '../components/ProjectsSection'
import BrandsSlider from '../components/BrandsSlider'
import PartnersSlider from '../components/PartnersSlider'

const AboutPage = () => {
  const { t, currentLanguage } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-white py-20" style={{background: 'linear-gradient(135deg, #04babd 0%, #038a8d 100%)'}}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('aboutPage.pageTitle')}
          </h1>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{color: '#04babd'}}>
              {t('aboutPage.historyTitle')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {aboutCompanyData.history[currentLanguage]}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{color: '#04babd'}}>
              {t('aboutPage.missionTitle')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {aboutCompanyData.mission[currentLanguage]}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{color: '#04babd'}}>
            {t('aboutPage.valuesTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {aboutCompanyData.values.map((value) => (
              <div 
                key={value.id}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-200"
              >
                <h3 className="text-xl font-semibold mb-3" style={{color: '#04babd'}}>
                  {value.title[currentLanguage]}
                </h3>
                <p className="text-gray-600">
                  {value.description[currentLanguage]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{color: '#04babd'}}>
              {t('aboutPage.teamTitle')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {aboutCompanyData.team[currentLanguage]}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Brands Section */}
      <BrandsSlider />

      {/* Partners Section */}
      <PartnersSlider />
    </div>
  )
}

export default AboutPage