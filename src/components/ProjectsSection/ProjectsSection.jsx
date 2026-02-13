import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { projects } from '../../config/projects'

const ProjectsSection = () => {
  const { t, currentLanguage } = useLanguage()
  const [showAll, setShowAll] = useState(false)

  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{color: '#04babd'}}>
            {t('projects.title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title[currentLanguage]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span 
                    className="px-3 py-1 text-xs font-semibold text-white rounded-full"
                    style={{backgroundColor: '#04babd'}}
                  >
                    {project.category[currentLanguage]}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-[#04babd] transition-colors">
                  {project.title[currentLanguage]}
                </h3>
                <p className="text-gray-600 text-sm">
                  {project.description[currentLanguage]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {projects.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-200 shadow-lg hover:shadow-xl hover:transform hover:-translate-y-1"
              style={{backgroundColor: '#04babd'}}
            >
              {showAll ? t('projects.viewAll') : t('projects.viewAll')}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectsSection