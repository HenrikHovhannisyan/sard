import { useLanguage } from '../../context/LanguageContext'
import { newsData } from '../../config/news'
import { Link } from 'react-router-dom'
import ImageWithFallback from '../../components/ImageWithFallback/ImageWithFallback'

const NewsPage = () => {
  const { t, currentLanguage } = useLanguage()
  const formatDate = (dateStr) => {
    const d = new Date(dateStr)
    const day = String(d.getDate()).padStart(2, '0')
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const year = d.getFullYear()
    return `${day}.${month}.${year}`
  }

  return (
    <div className="min-h-screen">
      <section className="text-white py-20" style={{background: 'linear-gradient(135deg, var(--primary-color) 0%, #038a8d 100%)'}}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {t('newsPage.pageTitle')}
          </h1>
          <p className="text-lg md:text-xl text-white text-opacity-90 max-w-3xl mx-auto">
            {t('newsPage.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((item) => (
              <Link to={`/news/${item.id}`} key={item.id}>
                <article className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 group">
                  <div className="relative h-40 overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title[currentLanguage]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-white bg-opacity-90 rounded-md px-2 py-1 text-xs font-semibold">
                      {formatDate(item.date)}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-[var(--primary-color)] transition-colors">
                      {item.title[currentLanguage]}
                    </h3>
                    <p className="text-gray-600">
                      {item.excerpt[currentLanguage]}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewsPage
