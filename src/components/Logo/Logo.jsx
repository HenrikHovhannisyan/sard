import { useLanguage } from '../../context/LanguageContext'
import ImageWithFallback from '../ImageWithFallback/ImageWithFallback'
import logo from '../../assets/images/logo-small.png'

const Logo = () => {
  const { t } = useLanguage()

  return (
    <ImageWithFallback
      src={logo}
      alt={t('title')}
      className="h-10 object-contain"
    />
  )
}

export default Logo
