import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { newsData } from '../../config/news'

const NewsDetailPage = () => {
  const { id } = useParams()
  const { t, currentLanguage } = useLanguage()
  const formatDate = (dateStr) => {
    const d = new Date(dateStr)
    const day = String(d.getDate()).padStart(2, '0')
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const year = d.getFullYear()
    return `${day}.${month}.${year}`
  }

  const item = newsData.find((n) => String(n.id) === String(id))

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">404</h1>
          <p className="text-gray-600 mb-6">News not found</p>
          <Link
            to="/news"
            className="inline-block px-6 py-2 rounded-lg font-semibold text-white"
            style={{backgroundColor: '#04babd'}}
          >
            {t('news')}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <section className="text-white py-20" style={{background: 'linear-gradient(135deg, #04babd 0%, #038a8d 100%)'}}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {item.title[currentLanguage]}
          </h1>
          <p className="text-lg md:text-xl text-white text-opacity-90">
            {formatDate(item.date)}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <img
            src={item.image}
            alt={item.title[currentLanguage]}
            className="w-full h-80 object-cover rounded-xl shadow-md mb-8"
          />
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              {item.content[currentLanguage]}
            </p>
          </div>
          <div className="mt-10">
            <Link
              to="/news"
              className="inline-block px-6 py-2 rounded-lg font-semibold text-white"
              style={{backgroundColor: '#04babd'}}
            >
              {t('news')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewsDetailPage
