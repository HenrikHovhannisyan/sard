import { useLanguage } from '../../context/LanguageContext'
import ImageWithFallback from '../ImageWithFallback/ImageWithFallback'

const Logo = () => {
  const { t } = useLanguage()

  return (
    <ImageWithFallback
      src="/src/assets/images/logo-small.png"
      alt={t('title')}
      className="h-10 object-contain"
    />
  )
}

export default Logo
