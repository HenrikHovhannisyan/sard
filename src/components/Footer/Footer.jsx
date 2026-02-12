import { useLanguage } from '../../context/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('title')}</h3>
            <p className="text-gray-300">
              {t('footer.description')}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contactsTitle')}</h4>
            <p className="text-gray-300">Email: info@sardengineering.com</p>
            <p className="text-gray-300">Телефон: +374 (XX) XXX-XXX</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.socialTitle')}</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer