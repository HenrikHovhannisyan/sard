import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import Logo from '../Logo'
import LanguageSwitcher from '../LanguageSwitcher'

const Header = () => {
  const { t } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationItems = [
    { key: 'home', href: '#' },
    { key: 'about', href: '#about' },
    { key: 'news', href: '#news' },
    { key: 'contacts', href: '#contacts' }
  ]

  return (
    <header className="shadow-lg sticky top-0 z-50" style={{backgroundColor: '#04babd'}}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-white hover:opacity-80 transition-all duration-200 font-medium"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-black hover:bg-opacity-10 transition-colors"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white border-opacity-20">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-white hover:opacity-80 transition-all duration-200 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-white border-opacity-20">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header